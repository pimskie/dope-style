"use client";
import { storeUser } from "@/utils/firebase/firebase";
import { signInWithGooglePopup } from "@/utils/firebase/authentication";
import type { UserCredential } from "firebase/auth";

const signInWithPopup = async () => {
  const response: UserCredential = await signInWithGooglePopup();
  const user = response.user;

  await storeUser(user);
};

const SignInPopup = () => {
  return <button onClick={signInWithPopup}>Sign in popup</button>;
};

export default SignInPopup;
