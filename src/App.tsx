import type { Category } from "@/types/Category";
import CategoryCard from "./components/CategoryCard/CategoryCard";

type CategoryList = Array<Category>;

const App = () => {
  const categories: CategoryList = [
    {
      title: "Hats",
      imageSource: "https://picsum.photos/400",
    },
    {
      title: "Shirts",
      imageSource: "https://picsum.photos/400",
    },
    {
      title: "Sneakers",
      imageSource: "https://picsum.photos/400",
    },
    {
      title: "Sweaters",
      imageSource: "https://picsum.photos/400",
    },
  ];
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      {categories.map((category) => (
        <CategoryCard {...category} key={category.title} />
      ))}
    </div>
  );
};

export default App;
