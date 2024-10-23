import { StoreService } from "@/services/store";
import CategoryOverview from "@/components/CategoryOverview/CategoryOverview";
import CategoryProviderWrapper from "./CategoryProviderWrapper";

import { notFound } from "next/navigation";
import { ucfirst } from "@/utils/string/ucfirst";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: ucfirst(params.category),
  };
}

const Shop = async ({ params }: Props) => {
  const category = await StoreService.category.getBySlug(params.category);

  if (!category) {
    return notFound();
  }

  const products = await StoreService.product.getByCategoryId(category.id);

  return (
    <div>
      <CategoryProviderWrapper category={category} products={products}>
        <CategoryOverview />
      </CategoryProviderWrapper>
    </div>
  );
};

export default Shop;
