// "use client";

import RegisterForm from "@/components/RegisterForm/RegisterForm";
import SignInForm from "@/components/SignInForm/SignInForm";
import SignInPopup from "@/components/SignInForm/SignInPopup";
import { Authentication } from "@/types/Authentication";
import Heading from "@/components/Heading/Heading";

export async function generateMetadata() {
  return {
    title: "Sign in",
  };
}

const SignIn = () => {
  return (
    <div>
      <Heading>Sign in, yo</Heading>

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
