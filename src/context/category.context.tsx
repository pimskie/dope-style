import { createContext, useContext } from "react";

import type { Category } from "@/types/Category";
import type { Product } from "@/types/Product";

interface CategoryContextType {
  category: Category;
  products?: Product[];
}

const CategoryContext = createContext<CategoryContextType | null>(null);

const useCategory = () => {
  const categoryContext = useContext(CategoryContext);

  if (!categoryContext) {
    throw new Error(
      "useCategory has to be used within <CategoryContext.Provider>"
    );
  }

  return categoryContext;
};

export { CategoryContext, useCategory };
