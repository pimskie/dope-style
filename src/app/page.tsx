import type { Category } from "@/types/Category";
import CategoryList from "@/components/CategoryList/CategoryList";
import Heading from "@/components/Heading/Heading";

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
      <Heading>Welcome to Dope Style</Heading>
      <CategoryList categories={categories} />
    </div>
  );
};

export default App;
