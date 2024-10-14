"use client";
// `signInWithRedirect` doesn't seem to work on localhost
// https://github.com/firebase/firebase-js-sdk/issues/7824

import { handleForm } from "@/utils/handle-form";
import { signInWithGooglePopup, createUserFromAuth } from "@/utils/firebase";
import type { UserCredential } from "firebase/auth";

import VerticalStack from "@/components/Layout/Stack/VerticalStack";
import Error from "@/components/Error/Error";
import { useFormState } from "react-dom";
import { useState } from "react";

const signInWithPopup = async () => {
  const response: UserCredential = await signInWithGooglePopup();
  const user = response.user;

  await createUserFromAuth(user);
};

const renderError = (showError: boolean, errorJSON: string = "") => {
  if (!showError) {
    return null;
  }

  const errorObject = JSON.parse(errorJSON);

  return (
    <Error error="The following fields are invalid: ">
      <ul>
        {errorObject.map((fieldId: string) => (
          <li key={fieldId}>{fieldId}</li>
        ))}
      </ul>
    </Error>
  );
};

const requiredFields = ["displayName", "email", "password", "passwordConfirm"];

const SignInForm = () => {
  const handleFormWithRequiredFields = handleForm.bind(null, requiredFields);

  const [errorObject, formAction] = useFormState(
    handleFormWithRequiredFields,
    null
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="signup-form">
      <form action={formAction} onSubmit={onSubmit}>
        {renderError(!!errorObject, errorObject)}

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
