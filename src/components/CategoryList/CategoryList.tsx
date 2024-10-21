import type { Category } from "@/types/Category";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Heading from "../Heading/Heading";

interface Props {
  categories: Array<Category>;
}
const CategoryList = ({ categories }: Props) => {
  return (
    <div>
      <Heading Tag="h2">Categories</Heading>
      <div className="categories-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard {...category} key={category.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
