import { Category } from "@/types/Category";
import "./CategoryCard.styles.css";
import Link from "next/link";

const CategoryCard = ({ name, image, slug }: Category) => {
  return (
    <Link href={`/shop/${slug.toLocaleLowerCase()}`}>
      <div className="w-full aspect-square relative flex p-4 items-end">
        <img
          src={image}
          alt={`Image of ${name}`}
          className="absolute top-0 left-0"
        />

        <div className="relative z-10">
          <h2 className="category-card__title">{name}</h2>
          <div className="category-card__body cursor-pointer">Show more</div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
