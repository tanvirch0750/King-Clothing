import SignupFrom from '../../components/sign-up-form/SignupFrom';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignupFrom />
    </div>
  );
};

export default SignIn;
