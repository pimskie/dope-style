import { Skeleton } from "@/components/ui/skeleton";

import { Product } from "@/types/Product";
import styles from "./ProductList.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Fragment } from "react";

interface ProductListProps {
  products: Product[] | undefined;
  categorySlug: string;
  isLoading: boolean;
}

const renderLoading = (height: number = 400) => {
  return (
    <Fragment>
      <Skeleton className={`w-full h-[${height}px]`} />
      <Skeleton className={`w-full h-[${height}px]`} />
      <Skeleton className={`w-full h-[${height}px]`} />
    </Fragment>
  );
};

const renderProductList = (
  products: Product[] | undefined,
  categorySlug: string
) => {
  return products && products.length
    ? products?.map((product) => {
        return (
          <div className="overview__item" key={product.id}>
            <ProductCard product={product} slug={categorySlug} />
          </div>
        );
      })
    : "No products found";
};

const ProductList = ({
  products,
  categorySlug,
  isLoading,
}: ProductListProps) => {
  return (
    <section className={styles.productList}>
      {isLoading ? renderLoading() : renderProductList(products, categorySlug)}
    </section>
  );
};

export default ProductList;
