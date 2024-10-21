import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { initialize } from "./initialize";

type AuthChangedCallback = (user: User | null) => void;
initialize();

const provider: GoogleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();

const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const createUserWithCredentials = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const signInWithCredentials = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

const signOutUser = () => signOut(auth);

const onAuthChanged = (callback: AuthChangedCallback) =>
  onAuthStateChanged(auth, callback);

export {
  signInWithGooglePopup,
  signInWithCredentials,
  createUserWithCredentials,
  signOutUser,
  onAuthChanged,
};
