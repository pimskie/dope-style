import { signInWithCredentials } from "@/utils/firebase";
import type { ValidationStatus } from "@/types/ValidationStatus";
import { User } from "firebase/auth";
import { Authentication } from "@/types/Authentication";

const handleSignIn = async (previousState: any, formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return <ValidationStatus>{
      status: "error",
      message: "Not all required fields were passed",
    };
  }

  try {
    const result = await signInWithCredentials(email, password);
    const { user }: { user: User } = result;

    const authObject: Authentication = {
      uid: user.uid,
      providerId: user.providerId,
      email: user.email!,
      accessToken: user.accessToken,
    };

    const returnValue = <ValidationStatus>{
      status: "ok",
      payload: authObject,
    };

    // cookies.set({
    //   name: "user",
    //   value: JSON.stringify(authObject),
    //   httpOnly: true,
    //   path: "/",
    // });
  } catch (e: any) {
    const { code } = e;

    const message =
      code === "auth/invalid-credential"
        ? "Invalid credentials"
        : "Something went wrong";

    return <ValidationStatus>{
      status: "error",
      message,
    };
  }
};

export { handleSignIn };
