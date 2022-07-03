import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC9C0VyyGIK7G20LaCj9b_ggTF5Ykd4HkI',
  authDomain: 'king-clothing-30889.firebaseapp.com',
  projectId: 'king-clothing-30889',
  storageBucket: 'king-clothing-30889.appspot.com',
  messagingSenderId: '704143036024',
  appId: '1:704143036024:web:4cf8a668217a67aa7b278d',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// firestore database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  // console.log(userDocRef);
  // console.log(userSnapShot);
  // console.log(userSnapShot.exists());

  // if user data does not exists - create / set document with the data from userAuth in my collection
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  // if user data exists - return userDocRef
  return userDocRef;
};
