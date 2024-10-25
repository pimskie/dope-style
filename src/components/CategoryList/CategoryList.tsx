"use client";
import { Skeleton } from "@/components/ui/skeleton";

import type { Category } from "@/types/Category";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Heading from "@/components/Typography/Heading/Heading";
import styles from "./CategoryList.module.css";
import { StoreService } from "@/services/store";
import { useEffect, useState } from "react";

const renderCategories = (categories: Category[]) => {
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => (
        <CategoryCard {...category} key={category.name} />
      ))}
    </div>
  );
};

const renderSkeleton = () => {
  return (
    <div className={styles.categoriesContainer}>
      <Skeleton className="w-full h-[300px]" />
      <Skeleton className="w-full h-[300px]" />
      <Skeleton className="w-full h-[300px]" />
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
      {isLoading ? renderSkeleton() : renderCategories(categories)}
    </div>
  );
};

export default CategoryList;
