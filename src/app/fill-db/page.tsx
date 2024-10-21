import { database } from "@/utils/firebase/firebase";

import { collection, doc, setDoc } from "firebase/firestore";

// Function to add categories and products
async function setupDatabase() {
  const categories = [
    {
      name: "caps",
      products: [
        { name: "Baseball Cap", price: 19.99, stock: 50 },
        { name: "Snapback Cap", price: 24.99, stock: 30 },
        { name: "Beanie", price: 14.99, stock: 20 },
      ],
    },
    {
      name: "sweaters",
      products: [
        { name: "Hoodie", price: 39.99, stock: 40 },
        { name: "Crewneck Sweater", price: 34.99, stock: 25 },
        { name: "Zip-up Hoodie", price: 44.99, stock: 15 },
      ],
    },
  ];

  for (const category of categories) {
    const categoryRef = doc(collection(database, "categories"), category.name);
    await setDoc(categoryRef, { name: category.name });

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
