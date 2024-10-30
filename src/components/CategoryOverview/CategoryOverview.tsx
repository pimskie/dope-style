"use client";

import { useCategory } from "@/context/category.context";
import styles from "./CategoryOverview.module.css";
import VerticalStack from "../Layout/Stack/VerticalStack";
import { CategoryHeader } from "./CategoryHeader";
import ProductList from "../ProductList/ProductList";
import { useEffect, useCallback, useState } from "react";
import { Product } from "@/types/Product";
import { StoreService } from "@/services/store";

const CategoryOverview = () => {
  const { category } = useCategory();

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | undefined>([]);

  const fetchProducts = useCallback(async () => {
    const products = await StoreService.product.where([
      {
        field: "categoryId",
        operator: "==",
        value: category.id,
      },
    ]);

    setProducts(products);
    setIsLoading(false);
  }, [category.id]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className={styles.overview}>
      <VerticalStack>
        <CategoryHeader category={category} />
        <ProductList
          products={products}
          categorySlug={category.slug}
          isLoading={isLoading}
        />
      </VerticalStack>
    </div>
  );
};

export default CategoryOverview;
