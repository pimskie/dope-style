import { collection, getDocs } from "firebase/firestore";
import { database } from "@/utils/firebase/firebase";

import type { Product, ProductDocument } from "@/types/Product";

const product = {
  getAll: async (categoryId: string) => {
    const productsCollection = collection(
      database,
      `categories/${categoryId}/products`
    );
    const productSnapshot = await getDocs(productsCollection);

    const productList: Product[] = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as ProductDocument),
    }));

    return productList;
  },
};

export { product };
