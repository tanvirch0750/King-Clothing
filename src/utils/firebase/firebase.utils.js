import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC9C0VyyGIK7G20LaCj9b_ggTF5Ykd4HkI',
  authDomain: 'king-clothing-30889.firebaseapp.com',
  projectId: 'king-clothing-30889',
  storageBucket: 'king-clothing-30889.appspot.com',
  messagingSenderId: '704143036024',
  appId: '1:704143036024:web:4cf8a668217a67aa7b278d',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
