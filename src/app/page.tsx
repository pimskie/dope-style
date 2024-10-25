import { StoreService } from "@/services/store";

import type { Category } from "@/types/Category";
import CategoryList from "@/components/CategoryList/CategoryList";
import Heading from "@/components/Typography/Heading/Heading";
import Leader from "@/components/Typography/Leader/Leader";

type CategoryList = Array<Category>;

const App = async () => {
  const categories = await StoreService.category.getAll();

  return (
    <div>
      <Heading>Dope Style</Heading>

      <Leader>
        Welcome to Cool Style, where streetlife meets fashion. Our collection is
        a tribute to the streets, featuring edgy streetwear, durable skatewear,
        and top-notch graffiti supplies that define your unique style. Whether
        you're hitting the pavement or creating your next masterpiece, Cool
        Style has got you covered. Embrace the culture, stand out, and make your
        mark with Cool Style.
      </Leader>
      <CategoryList categories={categories} />
    </div>
  );
};

export default App;
