import { initializeApp } from "firebase/app";
import type { FirebaseApp } from "firebase/app";

let app: FirebaseApp;

const firebaseConfig = {
  projectId: "dope-style-react",
  apiKey: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
  storageBucket: "dope-style-react.appspot.com",
  messagingSenderId: "800841978158",
  appId: "1:800841978158:web:64110621260e57ff786abf",
};

const initialize = (): FirebaseApp =>
  (app = app ?? initializeApp(firebaseConfig));

export { initialize };
