"use client";
// `signInWithRedirect` doesn't seem to work on localhost
// https://github.com/firebase/firebase-js-sdk/issues/7824

import { handleForm } from "@/utils/handle-form";

import VerticalStack from "@/components/Layout/Stack/VerticalStack";
import Error from "@/components/Error/Error";
import { useFormState } from "react-dom";
import { useState } from "react";

const defaultFormFields = {
  displayName: "pimskie",
  email: "pim.vandie@iodigital.com",
  password: "",
  confirmPassword: "",
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

const SignInForm = () => {
  const [errorObject, formAction] = useFormState(handleForm, null);
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const onFieldChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setFormFields({ ...formFields, [name]: value });
  };

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
              value={displayName}
              required
              onChange={onFieldChanged}
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
              value={email}
              required
              onChange={onFieldChanged}
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
              required
              onChange={onFieldChanged}
            />
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword" className="form-label">
              Password confirm
            </label>
            <input
              className="form-input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              onChange={onFieldChanged}
            />
          </div>
          <button type="submit">Create account</button>
        </VerticalStack>
      </form>
    </div>
  );
};

export default SignInForm;
