import { StoreService } from "@/services/store";

import type { Category } from "@/types/Category";
import CategoryList from "@/components/CategoryList/CategoryList";
import Heading from "@/components/Heading/Heading";

type CategoryList = Array<Category>;

const App = async () => {
  const categories = await StoreService.category.getAll();

  return (
    <div>
      <Heading>Welcome to Dope Style</Heading>
      <CategoryList categories={categories} />
    </div>
  );
};

export default App;
