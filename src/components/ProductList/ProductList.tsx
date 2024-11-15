import { Skeleton } from "@/components/ui/skeleton";

import { Product } from "@/types/Product";
import styles from "./ProductList.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Fragment } from "react";
import { useTranslations } from "use-intl";

interface ProductListProps {
  products: Product[] | undefined;
  categorySlug: string;
  isLoading: boolean;
}

const renderLoading = () => {
  return (
    <Fragment>
      <Skeleton className={`w-full h-52 md:h-96`} />
      <Skeleton className={`w-full h-52 md:h-96`} />
      <Skeleton className={`w-full h-52 md:h-96`} />
      <Skeleton className={`w-full h-52 md:h-96`} />
      <Skeleton className={`w-full h-52 md:h-96`} />
    </Fragment>
  );
};

const renderProductList = (
  products: Product[] | undefined,
  categorySlug: string,
  noResultsText: string
) => {
  return products && products.length ? (
    products?.map((product) => {
      return (
        <div className="overview__item" key={product.id}>
          <ProductCard product={product} slug={categorySlug} />
        </div>
      );
    })
  ) : (
    <div>{noResultsText}</div>
  );
};

const ProductList = ({
  products,
  categorySlug,
  isLoading,
}: ProductListProps) => {
  const t = useTranslations("products");

  return (
    <section className={styles.productList}>
      {isLoading
        ? renderLoading()
        : renderProductList(products, categorySlug, t("noResults"))}
    </section>
  );
};

export default ProductList;
