import { Product } from "@/types/Product";
import styles from "./ProductList.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

interface ProductListProps {
  products: Product[] | undefined;
  categorySlug: string;
}

const ProductList = ({ products, categorySlug }: ProductListProps) => {
  return (
    <section className={styles.productList}>
      {products && products.length
        ? products?.map((product) => {
            return (
              <div className="overview__item" key={product.id}>
                <ProductCard product={product} slug={categorySlug} />
              </div>
            );
          })
        : "No products found"}
    </section>
  );
};

export default ProductList;
