"use client";

import { redirect } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { useFormState } from "react-dom";
import { handleSignIn } from "@/utils/handle-sign-in";
import VerticalStack from "@/components/Layout/Stack/VerticalStack";
import Error from "@/components/Error/Error";

import type { SignInFields } from "@/types/SignInFields";
import Heading from "../Heading/Heading";

const defaultFormFields: SignInFields = {
  email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS!,
  password: process.env.NEXT_PUBLIC_PASSWORD!,
};

const renderError = (message?: string) => {
  return message ? <Error error={message}></Error> : null;
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState<SignInFields>(defaultFormFields);
  const [signInFeedback, formHandler] = useFormState(handleSignIn, null);

  useEffect(() => {
    if (signInFeedback?.status === "ok") {
      redirect(`/`);
    }
  }, [signInFeedback]);

  const onFieldChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <Heading Tag="h2">Login</Heading>

      <form action={formHandler}>
        <VerticalStack>
          {renderError(signInFeedback?.message)}
          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formFields.email}
              onChange={onFieldChanged}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="password-signin" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password-signin"
              name="password"
              className="form-input"
              value={formFields.password}
              onChange={onFieldChanged}
              required
            />
          </div>

          <button type="submit">Log in</button>
        </VerticalStack>
      </form>
    </div>
  );
};

export default SignInForm;
