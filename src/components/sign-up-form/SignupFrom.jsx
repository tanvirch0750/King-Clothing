import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './SignupForm.styles.scss';

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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Dispaly Name"
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />

        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
};

export default SignupFrom;
