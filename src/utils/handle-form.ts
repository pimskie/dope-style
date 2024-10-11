"use server";

import { signInWithGooglePopup, createUserFromAuth } from "@/utils/firebase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const handleForm = (previousState: any, data: FormData) => {
  const requiredFields = [
    "displayName",
    "email",
    "password",
    "passwordConfirm",
  ];

  try {
    const requiredEntries = Array.from(data.entries()).filter(([key]) =>
      requiredFields.includes(key)
    );

    const hasEmptyRequiredEntries = requiredEntries.some(
      ([key, value]) => !value
    );

    console.log({ hasEmptyRequiredEntries });
    if (hasEmptyRequiredEntries) {
      throw Error("Empty values");
    }
  } catch (e: any) {
    return e.toString();
  }

  const path = "/sign-in/success";
  revalidatePath(path);
  redirect(path);
};

export { handleForm };
