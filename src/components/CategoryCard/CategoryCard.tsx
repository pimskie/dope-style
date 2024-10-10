import { Category } from "@/types/Category";
import "./CategoryCard.styles.css";
const CategoryCard = ({ title, imageSource, cta = "Buy now" }: Category) => {
  return (
    <div className="w-full aspect-square relative flex p-4 items-end">
      <img src={imageSource} alt="" className="absolute top-0 left-0" />

      <div className="relative z-10">
        <h2 className="category-card__title">{title}</h2>
        <div className="category-card__body cursor-pointer">{cta}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
