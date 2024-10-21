import { StoreService } from "@/services/store";
import CategoryOverview from "@/components/CategoryOverview/CategoryOverview";
import CategoryProviderWrapper from "./CategoryProviderWrapper";

import { notFound } from "next/navigation";

type Props = {
  params: { type: string };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: params.type,
  };
}

const Shop = async ({ params }: Props) => {
  const fetchedCategory = await StoreService.category.getById(params.type);

  if (!fetchedCategory) {
    return notFound();
  }

  return (
    <div>
      <CategoryProviderWrapper category={fetchedCategory}>
        <CategoryOverview />
      </CategoryProviderWrapper>
    </div>
  );
};

export default Shop;
