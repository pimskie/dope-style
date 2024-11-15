import { StoreService } from "@/services/store";

import type { Category } from "@/types/Category";
import CategoryList from "@/components/CategoryList/CategoryList";
import Heading from "@/components/Typography/Heading/Heading";
import Leader from "@/components/Typography/Leader/Leader";

// https://github.com/amannn/next-intl/issues/406#issuecomment-2418418325
import { getTranslations } from "next-intl/server";

type CategoryList = Array<Category>;

const App = async () => {
  const t = await getTranslations("HomePage");
  const categories = await StoreService.category.getAll();

  return (
    <div>
      <Heading>Dope Style</Heading>
      <Heading Tag="h3">{t("tagline")}</Heading>

      <Leader>{t("intro")}</Leader>
      <CategoryList categories={categories} />
    </div>
  );
};

export default App;
