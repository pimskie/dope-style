"use client";
// `signInWithRedirect` doesn't seem to work on localhost
// https://github.com/firebase/firebase-js-sdk/issues/7824

import { handleRegister } from "@/utils/handle-register";

import VerticalStack from "@/components/Layout/Stack/VerticalStack";
import Error from "@/components/Error/Error";
import { useFormState } from "react-dom";
import { useState } from "react";
import { ValidationStatus } from "@/types/ValidationStatus";
import { useTranslations, useLocale } from "next-intl";

const defaultFormFields = {
  displayName: "pimskie",
  email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS!,
  password: process.env.NEXT_PUBLIC_PASSWORD!,
  confirmPassword: process.env.NEXT_PUBLIC_PASSWORD!,
};

const renderError = (error?: ValidationStatus, children?: React.ReactNode) => {
  if (!error || !error.message) {
    return null;
  }

  return <Error error={error.message}>{children}</Error>;
};

const SignInForm = () => {
  const t = useTranslations("authentication");

  const [serverActionError, formAction] = useFormState(handleRegister, null);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [clientSideError, setClientSideError] = useState<ValidationStatus>();

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
    const response = await handleRegister(null, formData);

    setClientSideError(response);
  };

  return (
    <div className="signup-form">
      <form action={formAction} onSubmit={onSubmit}>
        {renderError(serverActionError || clientSideError)}
        <VerticalStack>
          <div className="form-field">
            <label htmlFor="displayName" className="form-label">
              {t("displayName")}
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
              {t("emailAddress")}
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onFieldChanged}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password" className="form-label">
              {t("password")}
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
              {t("passwordConfirm")}
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
          <button type="submit">{t("createAccount")}</button>
        </VerticalStack>
      </form>
    </div>
  );
};

export default SignInForm;
