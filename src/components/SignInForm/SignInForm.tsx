"use client";
// `signInWithRedirect` doesn't seem to work on localhost
// https://github.com/firebase/firebase-js-sdk/issues/7824

import { handleForm } from "@/utils/handle-form";
import { signInWithGooglePopup, createUserFromAuth } from "@/utils/firebase";
import type { UserCredential } from "firebase/auth";
import { useSearchParams } from "next/navigation";

import VerticalStack from "@/components/Layout/Stack/VerticalStack";
import Error from "@/components/Error/Error";
import { useFormState } from "react-dom";
import { useState } from "react";

const signInWithPopup = async () => {
  const response: UserCredential = await signInWithGooglePopup();
  const user = response.user;

  await createUserFromAuth(user);
};

const renderError = (
  showError: boolean,
  errorText: string = "Something went wrong"
) => (showError ? <Error error={errorText} /> : null);

const SignInForm = () => {
  const searchParams = useSearchParams();
  const [showError, setShowError] = useState(searchParams.has("error"));

  const [message, formHandler] = useFormState(handleForm, null);

  return (
    <div className="signup-form">
      <form action={formHandler}>
        {renderError(!!message, message)}

        <VerticalStack>
          <div className="form-field">
            <label htmlFor="displayName" className="form-label">
              Display name
            </label>
            <input
              className="form-input"
              type="text"
              id="displayName"
              name="displayName"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              defaultValue="pim.vandie@iodigital.com"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
            />
          </div>

          <div className="form-field">
            <label htmlFor="passwordConfirm" className="form-label">
              Password confirm
            </label>
            <input
              className="form-input"
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
            />
          </div>
          <button type="submit">Create account</button>
        </VerticalStack>
      </form>

      {/* <button onClick={signInWithPopup}>Sign in popup</button> */}
    </div>
  );
};

export default SignInForm;
