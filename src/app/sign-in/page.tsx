import SignInForm from "@/components/SignInForm/SignInForm";
import SignInPopup from "@/components/SignInForm/SignInPopup";

export async function generateMetadata() {
  return {
    title: "Sign in",
  };
}

const SignIn = () => {
  return (
    <div>
      <h1>Sign in, yo</h1>

      <SignInPopup />

      <SignInForm />
    </div>
  );
};

export default SignIn;
