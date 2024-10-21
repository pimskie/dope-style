"use client";
import { useCategory } from "@/context/category.context";
import Leader from "@/components/Typography/Leader/Leader";

const CategoryOverview = () => {
  const { category } = useCategory();

  return (
    <div>
      <h1>Category: {category.name}</h1>

      <img src={category.image} alt={`An image of ${category.name}`} />
      <Leader>{category.leader}</Leader>

      <p className="description">{category.description}</p>
    </div>
  );
};

export default CategoryOverview;
