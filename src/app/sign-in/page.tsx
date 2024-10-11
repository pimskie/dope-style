import SignInForm from "@/components/SignInForm/SignInForm";

export async function generateMetadata() {
  return {
    title: "Sign in",
  };
}

const SignIn = () => {
  return (
    <div>
      <h1>Sign in, yo</h1>

      <SignInForm />
    </div>
  );
};

export default SignIn;
