"use client";

import { useCategory } from "@/context/category.context";
import styles from "./CategoryOverview.module.css";
import VerticalStack from "../Layout/Stack/VerticalStack";
import { CategoryHeader } from "./CategoryHeader";
import ProductList from "../ProductList/ProductList";
import { useEffect, useCallback, useState, useMemo } from "react";
import { Product } from "@/types/Product";
import { StoreService } from "@/services/store";

import { useSearchParams } from "next/navigation";
import { usePaginatedResults } from "@/hooks/usePaginatedResults";
import DopePagination from "@/components/Pagination/Pagination";

const perPage = 6;

const CategoryOverview = () => {
  const { category } = useCategory();

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | undefined>([]);

  const params = useSearchParams();
  const page = params.has("page") ? parseInt(params.get("page")!, 10) : 1;

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
  }, []);

  const productsSubset = usePaginatedResults(products, page);

  return (
    <div className={styles.overview}>
      <VerticalStack>
        <CategoryHeader category={category} />
        <ProductList
          products={productsSubset()}
          categorySlug={category.slug}
          isLoading={isLoading}
        />

        <DopePagination currentPage={page} itemsCount={products?.length ?? 0} />
      </VerticalStack>
    </div>
  );
};

export default CategoryOverview;
