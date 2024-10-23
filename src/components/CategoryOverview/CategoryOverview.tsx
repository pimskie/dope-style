"use client";
import { useCategory } from "@/context/category.context";
import Leader from "@/components/Typography/Leader/Leader";
import ProductCard from "@/components/ProductCard/ProductCard";
import { ucfirst } from "@/utils/string/ucfirst";

import styles from "./CategoryOverview.module.css";
import VerticalStack from "../Layout/Stack/VerticalStack";

const CategoryOverview = () => {
  const { category, products } = useCategory();

  return (
    <div className={styles.overview}>
      <VerticalStack>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>{ucfirst(category.name)}</h1>

          <img
            className={styles.headerImage}
            src={category.image}
            alt={`An image of ${category.name}`}
          />
          <div className={styles.headerDescription}>
            <Leader>{category.leader}</Leader>
            <p className="description">{category.description}</p>
          </div>
        </div>

        <section className={styles.productList}>
          {products?.map((product) => {
            return (
              <div className="overview__item" key={product.id}>
                <ProductCard product={product} slug={category.slug} />
              </div>
            );
          })}
        </section>
      </VerticalStack>
    </div>
  );
};

export default CategoryOverview;
