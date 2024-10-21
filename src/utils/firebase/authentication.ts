import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

import { initialize } from "./initialize";

import type { User } from "firebase/auth";

type UserAdditionalFields = {
  displayName: string;
};

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

export {
  signInWithGooglePopup,
  signInWithCredentials,
  createUserWithCredentials,
  signOutUser,
};
