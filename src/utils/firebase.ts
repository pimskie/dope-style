import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  DocumentReference,
  DocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

import type { User } from "firebase/auth";

type UserAdditionalFields = {
  displayName: string;
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
  projectId: "dope-style-react",
  storageBucket: "dope-style-react.appspot.com",
  messagingSenderId: "800841978158",
  appId: "1:800841978158:web:64110621260e57ff786abf",
};

const app = initializeApp(firebaseConfig);

const provider: GoogleAuthProvider = new GoogleAuthProvider();

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

const database = getFirestore();

const getUserSnapshot = async (user: User) => {
  const reference: DocumentReference = doc(database, "users", user.uid);
  const snapshot: DocumentSnapshot = await getDoc(reference);

  return { reference, snapshot };
};

const createUserFromAuth = async (
  user: User,
  additionalFields: Partial<UserAdditionalFields> = {}
): Promise<DocumentData> => {
  if (!user) {
    throw Error("No user was supplied for `createUserFromAuth`");
  }

  const { reference, snapshot } = await getUserSnapshot(user);

  if (snapshot.exists()) {
    return snapshot.data();
  }

  const createdAt = new Date();
  const { displayName, email } = user;
  const userFields = {
    displayName,
    email,
    createdAt,
    ...additionalFields,
  };

  try {
    await setDoc(reference, userFields);
    const { snapshot: addedUser } = await getUserSnapshot(user);

    return addedUser.data()!;
  } catch (e: any) {
    throw new Error("Error while creating the user", e);
  }
};

const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) {
    throw Error("Missing email or password");
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

const signInWithCredentials = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithCredentials,
};
