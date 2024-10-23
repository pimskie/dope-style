import { database } from "@/utils/firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { sweaters } from "./sweaters";
import { baseballCaps } from "./caps";

const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

// Function to add categories and products
// async function setupDatabase() {
//   for (const product of sweaters) {
//     const productRef = doc(collection(database, "products"));
//     await setDoc(productRef, product);
//   }

//   for (const product of baseballCaps) {
//     const productRef = doc(collection(database, "products"));
//     await setDoc(productRef, product);
//   }
// }

// setupDatabase().catch(console.error);

async function updateProductsWithSlug() {
  const productsRef = collection(database, "products");
  const querySnapshot = await getDocs(productsRef);

  for (const docSnapshot of querySnapshot.docs) {
    const productData = docSnapshot.data();
    const slug = createSlug(productData.name);

    await updateDoc(doc(database, "products", docSnapshot.id), { slug });
  }

  console.log("All products updated with slug field");
}

// updateProductsWithSlug();

const FillDB = () => {
  return (
    <div>
      <h1>Fill the database, yo</h1>
      <p>there ya go</p>
    </div>
  );
};

export default FillDB;
