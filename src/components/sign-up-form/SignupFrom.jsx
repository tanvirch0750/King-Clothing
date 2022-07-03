import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFileds = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupFrom = () => {
  const [formFields, setFormFields] = useState(defaultFormFileds);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFileds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email alreay exists');
      } else {
        console.log('User creation encounted an error', error);
      }
    }
  };

  return (
    <div>
      <h1>Signup with email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Displany Name</label>
        <input
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />

        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupFrom;
