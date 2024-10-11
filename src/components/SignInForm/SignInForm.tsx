"use client";

// `signInWithRedirect` doesn't seem to work on localhost
// https://github.com/firebase/firebase-js-sdk/issues/7824

import {
  signInWithGooglePopup,
  createUserFromAuth,
  auth,
} from "@/utils/firebase";

import { getRedirectResult } from "firebase/auth";
import type { UserCredential } from "firebase/auth";
import { useEffect } from "react";

const signInWithPopup = async () => {
  const response: UserCredential = await signInWithGooglePopup();
  const user = response.user;

  await createUserFromAuth(user);
};

const SignInForm = () => {
  useEffect(() => {
    const checkRedirectResult = async () => {
      const response = await getRedirectResult(auth);

      console.log(response);
    };

    checkRedirectResult();
  }, []);

  return (
    <div>
      <button onClick={signInWithPopup}>Sign in popup</button>
    </div>
  );
};

export default SignInForm;
