import { signInWithCredentials } from "@/utils/firebase/authentication";
import type { ValidationStatus } from "@/types/ValidationStatus";
import { User } from "firebase/auth";
import type { AuthUser } from "@/types/AuthUser";

interface UserWithToken extends User {
  accessToken: string;
}

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
    const user = result.user as UserWithToken;

    const authObject: AuthUser = {
      uid: user.uid,
      displayName: user.displayName,
      providerId: user.providerId,
      email: user.email!,
      accessToken: user.accessToken,
    };

    const returnValue = <ValidationStatus>{
      status: "ok",
      payload: authObject,
    };

    return returnValue;
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
