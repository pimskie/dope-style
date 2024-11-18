import {
  collection,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";

import { database } from "@/utils/firebase/firebase";

import type { Product, ProductDocument } from "@/types/Product";
import type { QueryWhere } from "@/types/QueryWhere";
import { DocumentData } from "firebase/firestore/lite";

const snapshotToProductList = (querySnapshot: QuerySnapshot<DocumentData>) => {
  const productList: Product[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ProductDocument),
  }));

  return productList;
};

const product = {
  getAll: async (categoryId: string) => {
    const productsCollection = collection(
      database,
      `categories/${categoryId}/products`
    );

    const productSnapshot = await getDocs(productsCollection);

    return snapshotToProductList(productSnapshot);
  },

  getByCategoryId: async (
    categoryId: string
  ): Promise<Product[] | undefined> => {
    const productsCollection = collection(database, "products");
    const q = query(productsCollection, where("categoryId", "==", categoryId));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return undefined;
    }

    return snapshotToProductList(querySnapshot);
  },

  where: async (whereParams: QueryWhere[]) => {
    const productsCollection = collection(database, "products");

    const whereClauses = whereParams.map((whereParam) =>
      where(whereParam.field, whereParam.operator, whereParam.value)
    );

    const q = query(productsCollection, ...whereClauses);
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return undefined;
    }

    return snapshotToProductList(querySnapshot);
  },
};

export { product };
