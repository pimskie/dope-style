"use client";
import { signInWithGooglePopup, createUserFromAuth } from "@/utils/firebase";
import type { UserCredential } from "firebase/auth";

const logGoogleUser = async () => {
  const response: UserCredential = await signInWithGooglePopup();
  const user = response.user;

  const userDoc = await createUserFromAuth(user);

  console.log(userDoc);
};

const SignInForm = () => {
  return <button onClick={logGoogleUser}>Sign in</button>;
};

export default SignInForm;
