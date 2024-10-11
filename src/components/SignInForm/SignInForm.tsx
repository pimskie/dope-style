"use client";
// `signInWithRedirect` doesn't seem to work on localhost
// https://github.com/firebase/firebase-js-sdk/issues/7824

import { handleForm } from "@/utils/handle-form";
import { signInWithGooglePopup, createUserFromAuth } from "@/utils/firebase";
import type { UserCredential } from "firebase/auth";
import { useSearchParams } from "next/navigation";

import VerticalStack from "@/components/Layout/Stack/VerticalStack";
import Error from "@/components/Error/Error";
import { useFormStatus } from "react-dom";
import { useState } from "react";

const signInWithPopup = async () => {
  const response: UserCredential = await signInWithGooglePopup();
  const user = response.user;

  await createUserFromAuth(user);
};

const renderError = (showError: boolean) =>
  showError ? <Error error="Something went wrong" /> : null;

const SignInForm = () => {
  const { pending } = useFormStatus();

  const searchParams = useSearchParams();
  const [showError, setShowError] = useState(searchParams.has("error"));

  const handleSigInForm = (formData: FormData) => {
    handleForm(formData);
  };

  return (
    <div className="signup-form">
      <form action={handleSigInForm}>
        {renderError(showError)}

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
