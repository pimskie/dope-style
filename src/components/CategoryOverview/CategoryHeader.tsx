import type { Category } from "@/types/Category";
import styles from "./CategoryHeader.module.css";
import { ucfirst } from "@/utils/string/ucfirst";
import Leader from "@/components/Typography/Leader/Leader";

interface CategoryHeaderProps {
  category: Category;
}

export const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  return (
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
  );
};
