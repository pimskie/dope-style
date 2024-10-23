import { StoreService } from "@/services/store";
import CategoryOverview from "@/components/CategoryOverview/CategoryOverview";
import CategoryProviderWrapper from "./CategoryProviderWrapper";

import { notFound } from "next/navigation";
import { ucfirst } from "@/utils/string/ucfirst";

type Props = {
  params: { type: string };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: ucfirst(params.type),
  };
}

const Shop = async ({ params }: Props) => {
  const category = await StoreService.category.getById(params.type);
  const products = await StoreService.product.getAll(params.type);

  if (!category) {
    return notFound();
  }

  return (
    <div>
      <CategoryProviderWrapper category={category} products={products}>
        <CategoryOverview />
      </CategoryProviderWrapper>
    </div>
  );
};

export default Shop;
