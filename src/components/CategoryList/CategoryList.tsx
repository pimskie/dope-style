import type { Category } from "@/types/Category";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Heading from "@/components/Typography/Heading/Heading";
import { useTranslations } from "next-intl";
import styles from "./CategoryList.module.css";
interface Props {
  categories: Array<Category>;
}
const CategoryList = ({ categories }: Props) => {
  const t = useTranslations("categories");

  return (
    <div>
      <Heading Tag="h2">{t("title")}</Heading>
      <div className={styles.categoriesList}>
        {categories.map((category) => (
          <CategoryCard {...category} key={category.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
