import { StoreService } from "@/services/store";
import CategoryOverview from "@/components/CategoryOverview/CategoryOverview";
import CategoryProviderWrapper from "./CategoryProviderWrapper";

import { notFound } from "next/navigation";
import { ucfirst } from "@/utils/string/ucfirst";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { category: string };
};

type Translations = {
  leader: string;
  description: string;
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

  const t = await getTranslations(`category.${category.slug}`);

  category.description = t("description");
  category.leader = t("leader");

  return (
    <div>
      <CategoryProviderWrapper category={category}>
        <CategoryOverview />
      </CategoryProviderWrapper>
    </div>
  );
};

export default Shop;
