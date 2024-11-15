"use client";

import { useState } from "react";
import { CategoryContext } from "@/context/category.context";
import type { Category } from "@/types/Category";

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
