import { Category } from "@/types/Category";
import { createContext, useContext } from "react";

interface CategoryContextType {
  category: Category;
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
