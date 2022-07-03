import SigninForm from '../../components/sign-in-form/SigninForm';
import SignupFrom from '../../components/sign-up-form/SignupFrom';
import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupFrom />
    </div>
  );
};

export default Authentication;
