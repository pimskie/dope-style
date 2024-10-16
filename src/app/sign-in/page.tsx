// "use client";

import { cookies } from "next/headers";

import RegisterForm from "@/components/RegisterForm/RegisterForm";
import SignInForm from "@/components/SignInForm/SignInForm";
import SignInPopup from "@/components/SignInForm/SignInPopup";
import { Authentication } from "@/types/Authentication";

export async function generateMetadata() {
  return {
    title: "Sign in",
  };
}

const onSignInSuccess = (auth: Authentication) => {
  console.log(auth);
};
const SignIn = () => {
  return (
    <div>
      <h1>Sign in, yo</h1>

      <div className="layout-uneven">
        <div className="layout-uneven__left">
          <SignInPopup />
          <SignInForm />
        </div>
        <div className="layout-uneven__right">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
