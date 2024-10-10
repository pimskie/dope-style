import type { Category } from "@/types/Category";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

interface Props {
  categories: Array<Category>;
}
const CategoryList = ({ categories }: Props) => {
  return (
    <div>
      <h1>Categories</h1>
      <div className="categories-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard {...category} key={category.title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
