import type { Category } from "@/types/Category";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import CategoryList from "./components/CategoryList/CategoryList";

type CategoryList = Array<Category>;

const App = () => {
  const categories: CategoryList = [
    {
      title: "Hats",
      imageSource: `https://picsum.photos/400?${Math.random()}`,
    },
    {
      title: "Shirts",
      imageSource: `https://picsum.photos/400?${Math.random()}`,
    },
    {
      title: "Sneakers",
      imageSource: `https://picsum.photos/400?${Math.random()}`,
    },
    {
      title: "Sweaters",
      imageSource: `https://picsum.photos/400?${Math.random()}`,
    },
  ];
  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};

export default App;
