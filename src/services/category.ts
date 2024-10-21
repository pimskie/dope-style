import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { database } from "@/utils/firebase/firebase";

import type { Category, CategoryDocument } from "@/types/Category";

const category = {
  getAll: async () => {
    const categoriesCollection = collection(database, "categories");

    const categorySnapshot = await getDocs(categoriesCollection);

    const categoryList: Category[] = categorySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as CategoryDocument),
    }));

    return categoryList;
  },

  getById: async (id: string): Promise<Category | undefined> => {
    const ref = doc(database, "categories", id);
    const snap = await getDoc(ref);

    return snap.exists()
      ? ({
          ...snap.data(),
          id,
        } as Category)
      : undefined;
  },
};

export { category };
