import { database } from "@/utils/firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

import { caps } from "./caps";
import { sweaters } from "./sweaters";

// Function to add categories and products
async function setupDatabase() {
  const categories = [
    {
      name: "caps",
      products: caps,
    },
    {
      name: "sweaters",
      products: sweaters,
    },
  ];

  for (const category of categories) {
    const categoryRef = doc(collection(database, "categories"), category.name);
    // await setDoc(categoryRef, { name: category.name });

    for (const product of category.products) {
      const productRef = doc(collection(categoryRef, "products"));
      await setDoc(productRef, product);
    }
  }
}

// setupDatabase().catch(console.error);

const FillDB = () => {
  return (
    <div>
      <h1>Fill the database, yo</h1>
      <p>there ya go</p>
    </div>
  );
};

export default FillDB;
