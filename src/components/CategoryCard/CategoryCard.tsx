import { Category } from "@/types/Category";
import "./CategoryCard.styles.css";
import { Link } from "@/i18n/routing";

import { useTranslations } from "next-intl";

const CategoryCard = ({ name, image, slug }: Category) => {
  const translations = useTranslations("cta");

  return (
    <Link href={`/shop/${slug.toLocaleLowerCase()}`}>
      <div className="w-full aspect-square relative flex p-4 items-end">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="absolute top-0 left-0 w-full"
        />

        <div className="relative z-10">
          <h2 className="category-card__title">{name}</h2>
          <div className="category-card__body cursor-pointer">
            {translations("showMore")}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
