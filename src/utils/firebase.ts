import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
  authDomain: "dope-style-react.firebaseapp.com",
  projectId: "dope-style-react",
  storageBucket: "dope-style-react.appspot.com",
  messagingSenderId: "800841978158",
  appId: "1:800841978158:web:64110621260e57ff786abf",
};

const app = initializeApp(firebaseConfig);

const provider: GoogleAuthProvider = new GoogleAuthProvider();

provider.setCustomParameters({
  login_hint: "user@example.com",
});

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const database = getFirestore();

const getUserSnapshot = async (user: User) => {
  const reference: DocumentReference = doc(database, "users", user.uid);
  const snapshot: DocumentSnapshot = await getDoc(reference);

  return { reference, snapshot };
};

const createUserFromAuth = async (user: User): Promise<DocumentData> => {
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
  };

  try {
    await setDoc(reference, userFields);
    const { snapshot: addedUser } = await getUserSnapshot(user);

    return addedUser.data()!;
  } catch (e: any) {
    throw new Error("Error while creating the user", e);
  }
};

export { auth, signInWithGooglePopup, createUserFromAuth };
