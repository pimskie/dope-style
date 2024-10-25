"use client";
import { useCategory } from "@/context/category.context";
import styles from "./CategoryOverview.module.css";
import VerticalStack from "../Layout/Stack/VerticalStack";
import { CategoryHeader } from "./CategoryHeader";
import ProductList from "../ProductList/ProductList";
import { useMemo } from "react";

const CategoryOverview = () => {
  const { category, products } = useCategory();
  const memoizedProducts = useMemo(() => products, [products]);

  return (
    <div className={styles.overview}>
      <VerticalStack>
        <CategoryHeader category={category} />

        <ProductList products={memoizedProducts} categorySlug={category.slug} />
      </VerticalStack>
    </div>
  );
};

export default CategoryOverview;
