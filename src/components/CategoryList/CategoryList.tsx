import type { Category } from "@/types/Category";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Heading from "@/components/Typography/Heading/Heading";

import styles from "./CategoryList.module.css";
interface Props {
  categories: Array<Category>;
}
const CategoryList = ({ categories }: Props) => {
  return (
    <div>
      <Heading Tag="h2">Categories</Heading>
      <div className={styles.categoriesList}>
        {categories.map((category) => (
          <CategoryCard {...category} key={category.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
