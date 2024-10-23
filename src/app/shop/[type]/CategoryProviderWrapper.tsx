"use client";

import { useState } from "react";
import { CategoryContext } from "@/context/category.context";
import type { Category } from "@/types/Category";
import type { Product } from "@/types/Product";

interface Props {
  category: Category;
  products: Product[];
  children: React.ReactNode;
}

const CategoryProviderWrapper = ({
  category: fetchedCategory,
  products: fetchedProducts,
  children,
}: Props) => {
  const [category] = useState(fetchedCategory);
  const [products] = useState(fetchedProducts);

  return (
    <div>
      <CategoryContext.Provider value={{ category, products }}>
        {children}
      </CategoryContext.Provider>
    </div>
  );
};

export default CategoryProviderWrapper;
