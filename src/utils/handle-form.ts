"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
} from "@/utils/firebase";
import { ValidationStatus } from "@/types/ValidationStatus";

type RequiredFields = Array<string>;

const requiredFields: RequiredFields = [
  "displayName",
  "email",
  "password",
  "confirmPassword",
];

const handleRegister = async (previousState: any, formData: FormData) => {
  let redirectPath: string | null = null;

  const requiredEntries = Array.from(formData.entries()).filter(([key]) =>
    requiredFields.includes(key)
  );

  const emptyRequiredFields = requiredEntries
    .filter(([key, value]) => !value)
    .map(([fieldName]) => fieldName);

  if (emptyRequiredFields.length) {
    return <ValidationStatus>{
      status: "error",
      message: JSON.stringify(emptyRequiredFields),
    };
  }

  try {
    const { user } = await createAuthUserWithEmailAndPassword(
      formData.get("email")!.toString(),
      formData.get("password")!.toString()
    );

    await createUserFromAuth(user, {
      displayName: formData.get("displayName")!.toString(),
    });

    redirectPath = "/sign-in/success";

    return <ValidationStatus>{
      status: "ok",
      message: "ok",
    };
  } catch (e: any) {
    return <ValidationStatus>{
      status: "error",
      message: e.message.toString(),
    };
  } finally {
    if (redirectPath) {
      revalidatePath(redirectPath);
      redirect(redirectPath);
    }
  }
};

export { handleRegister };
