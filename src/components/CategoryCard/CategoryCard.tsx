import { Category } from "@/types/Category";
import "./CategoryCard.styles.css";
const CategoryCard = ({ title, imageSource, cta = "Buy now" }: Category) => {
  return (
    <div className="category-card">
      <img src={imageSource} alt="" className="category-card__image" />
      <h2 className="category-card__title">{title}</h2>
      <div className="category-card__body">{cta}</div>
    </div>
  );
};

export default CategoryCard;
