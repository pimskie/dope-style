"use client";

import type { Category } from "@/types/Category";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Heading from "@/components/Typography/Heading/Heading";

import { StoreService } from "@/services/store";
import { useEffect, useState } from "react";

const renderCategories = (categories: Category[]) => {
  return (
    <div className="categories-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <CategoryCard {...category} key={category.name} />
      ))}
    </div>
  );
};

const CategoryList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await StoreService.category.getAll();

      setCategories(result);
      setIsLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Heading Tag="h2">Categories</Heading>
      {isLoading ? <div>Loading...</div> : renderCategories(categories)}
    </div>
  );
};

export default CategoryList;
