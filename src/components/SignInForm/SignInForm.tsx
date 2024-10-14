"use client";
// `signInWithRedirect` doesn't seem to work on localhost
// https://github.com/firebase/firebase-js-sdk/issues/7824

import { handleForm } from "@/utils/handle-form";

import VerticalStack from "@/components/Layout/Stack/VerticalStack";
import Error from "@/components/Error/Error";
import { useFormState } from "react-dom";
import { useState } from "react";
import { ValidationStatus } from "@/types/ValidationStatus";

const defaultFormFields = {
  displayName: "pimskie",
  email: `pim.vandie-${performance.now()}@iodigital.com`,
  password: "asdasd",
  confirmPassword: "asdasd",
};

const renderError = (error?: ValidationStatus, children?: React.ReactNode) => {
  if (!error || !error.message) {
    return null;
  }

  return <Error error={error.message}>{children}</Error>;
};

const SignInForm = () => {
  const [serverActionError, formAction] = useFormState(handleForm, null);
  const [clientSideError, setClientSideError] = useState<ValidationStatus>();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const onFieldChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const response = await handleForm(null, formData);

    setClientSideError(response);
  };

  return (
    <div className="signup-form">
      <form action={formAction} onSubmit={onSubmit}>
        {renderError(serverActionError || clientSideError)}
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
              value={password}
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
              value={confirmPassword}
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
