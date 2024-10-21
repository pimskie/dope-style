"use client";

import { CategoryContext } from "@/context/category.context";
import { Category } from "@/types/Category";
import { useContext, useState } from "react";

interface Props {
  category: Category;
  children: React.ReactNode;
}

const CategoryProviderWrapper = ({
  category: fetchedCategory,
  children,
}: Props) => {
  const [category] = useState(fetchedCategory);

  return (
    <div>
      <CategoryContext.Provider value={{ category }}>
        {children}
      </CategoryContext.Provider>
    </div>
  );
};

export default CategoryProviderWrapper;
