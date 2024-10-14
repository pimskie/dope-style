"use client";
import { signInWithGooglePopup, createUserFromAuth } from "@/utils/firebase";
import type { UserCredential } from "firebase/auth";

const signInWithPopup = async () => {
  const response: UserCredential = await signInWithGooglePopup();
  const user = response.user;

  await createUserFromAuth(user);
};

const SignInPopup = () => {
  return <button onClick={signInWithPopup}>Sign in popup</button>;
};

export default SignInPopup;
