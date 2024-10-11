"use server";

import { signInWithGooglePopup, createUserFromAuth } from "@/utils/firebase";
import { redirect } from "next/navigation";

const handleForm = (data: FormData) => {
  // return { error: "field was required" };
  const values = Array.from(data.values());

  const hasEmpty = values.some((val) => !val);

  if (hasEmpty) {
    redirect("/sign-in?error");
  }

  redirect("/sign-in/success");
};

export { handleForm };
