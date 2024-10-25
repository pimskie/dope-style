import {
  collection,
  getDocs,
  doc,
  getDoc,
  limit,
  query,
  where,
} from "firebase/firestore";
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

  getBySlug: async (slug: string): Promise<Category | undefined> => {
    const categoriesCollection = collection(database, "categories");
    const q = query(categoriesCollection, where("slug", "==", slug), limit(1));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return undefined;
    }

    const doc = querySnapshot.docs[0];

    return {
      id: doc.id,
      ...(doc.data() as CategoryDocument),
    };
  },
};

export { category };
