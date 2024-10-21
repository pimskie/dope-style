import { initialize } from "./initialize";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  DocumentReference,
  DocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

import type { User } from "firebase/auth";

type UserAdditionalFields = {
  displayName: string;
};

initialize();

const database = getFirestore();

const getUserSnapshot = async (user: User) => {
  const reference: DocumentReference = doc(database, "users", user.uid);
  const snapshot: DocumentSnapshot = await getDoc(reference);

  return { reference, snapshot };
};

const storeUser = async (
  user: User,
  additionalFields: Partial<UserAdditionalFields> = {}
): Promise<DocumentData> => {
  if (!user) {
    throw Error("No user was supplied for `storeUser`");
  }

  const { reference, snapshot } = await getUserSnapshot(user);

  if (snapshot.exists()) {
    return snapshot.data();
  }

  const createdAt = new Date();
  const { displayName, email } = user;
  const userFields = {
    displayName,
    email,
    createdAt,
    ...additionalFields,
  };

  try {
    await setDoc(reference, userFields);
    const { snapshot: addedUser } = await getUserSnapshot(user);

    return addedUser.data()!;
  } catch (e: any) {
    throw new Error("Error while creating the user", e);
  }
};

export { storeUser, database };
