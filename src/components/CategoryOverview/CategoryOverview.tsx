"use client";
import { useCategory } from "@/context/category.context";

const CategoryOverview = () => {
  const { category } = useCategory();

  return (
    <div>
      <h1>Category: {category.name}</h1>

      <img src={category.image} alt={`An image of ${category.name}`} />
      <p className="leader">{category.leader}</p>

      <p className="description">{category.description}</p>
    </div>
  );
};

export default CategoryOverview;
