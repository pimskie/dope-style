"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type RequiredFields = Array<string>;

const requiredFields: RequiredFields = [
  "displayName",
  "email",
  "password",
  "confirmPassword",
];

const handleForm = (previousState: any, data: FormData) => {
  try {
    const requiredEntries = Array.from(data.entries()).filter(([key]) =>
      requiredFields.includes(key)
    );

    const emptyRequiredFields = requiredEntries
      .filter(([key, value]) => !value)
      .map(([fieldName]) => fieldName);

    if (emptyRequiredFields.length) {
      throw Error(JSON.stringify(emptyRequiredFields));
    }
  } catch (e: any) {
    return e.message.toString();
  }

  const path = "/sign-in/success";
  revalidatePath(path);
  redirect(path);
};

export { handleForm };
