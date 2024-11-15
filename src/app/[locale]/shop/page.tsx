import CategoryList from "@/components/CategoryList/CategoryList";
import Heading from "@/components/Typography/Heading/Heading";
import { StoreService } from "@/services/store";

// https://github.com/amannn/next-intl/issues/406#issuecomment-2418418325
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  return {
    title: "Shop",
  };
}

const Shop = async () => {
  const t = await getTranslations("categories");
  const categories = await StoreService.category.getAll();

  return (
    <div>
      <Heading>{t("title")}</Heading>
      <CategoryList categories={categories} />
    </div>
  );
};

export default Shop;
