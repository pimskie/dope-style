import CategoryList from "@/components/CategoryList/CategoryList";
import Heading from "@/components/Heading/Heading";
import { StoreService } from "@/services/store";

export async function generateMetadata() {
  return {
    title: "Shop",
  };
}

const Shop = async () => {
  const categories = await StoreService.category.getAll();

  return (
    <div>
      <Heading>Categories</Heading>
      <CategoryList categories={categories} />
    </div>
  );
};

export default Shop;
