import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import FormInput from '../form-input/FormInput';
import './SigninForm.styles.scss';

const defaultFormFileds = {
  email: '',
  password: '',
};

const SigninForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFileds);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFileds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password for email');
      }
      if (error.code === 'auth/user-not-found') {
        alert('User not associated with this email');
      }
      console.log('Sign in error', error);
    }
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <div className="sign-in-container">
      <h2>Alereay have an account?</h2>
      <span>Signin with email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sigin</Button>
          <Button
            type="button"
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
