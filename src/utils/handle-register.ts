"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { storeUser } from "@/utils/firebase/firebase";
import { createUserWithCredentials } from "@/utils/firebase/authentication";

import type { ValidationStatus } from "@/types/ValidationStatus";

const requiredFields = ["displayName", "confirmPassword"];

const errorCodeMessageMap = new Map([
  // no info leaking
  ["auth/email-already-in-use", "Something went wrong. Please try again"],
  ["auth/missing-password", "Password is missing"],
  ["auth/missing-email", "Email address is missing"],
  ["auth/invalid-email", "Invalid email"],
  ["default", "Something went wrong. Please try again"],
]);

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
    const { user } = await createUserWithCredentials(
      formData.get("email")!.toString(),
      formData.get("password")!.toString()
    );

    await storeUser(user, {
      displayName: formData.get("displayName")!.toString(),
    });

    redirectPath = "/sign-in/success";

    return <ValidationStatus>{
      status: "ok",
      message: "ok",
    };
  } catch (e: any) {
    const message =
      errorCodeMessageMap.get(e.code) ?? errorCodeMessageMap.get("default");

    return <ValidationStatus>{
      status: "error",
      message,
    };
  } finally {
    if (redirectPath) {
      revalidatePath(redirectPath);
      redirect(redirectPath);
    }
  }
};

export { handleRegister };
