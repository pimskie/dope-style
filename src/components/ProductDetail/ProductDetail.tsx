"use client";

import { useState } from "react";
import { useCart } from "@/context/cart.context";
import Heading from "@/components/Typography/Heading/Heading";
import { Product } from "@/types/Product";

const ProductDetail = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    setQuantity(value);
  };

  const onAddToCart = () => {
    addItem({ product, quantity });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover mb-4 md:mb-0"
          />
        </div>
        <div className="md:w-1/2">
          <Heading>{product.name}</Heading>

          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex flex-col space-y-4">
            <div className="form-field">
              <input
                type="number"
                min={1}
                max={product.stock}
                className="form-input"
                value={quantity}
                onChange={onQuantityChange}
              />
            </div>
            <button
              onClick={onAddToCart}
              className="bg-lime-600 text-white px-6 py-2 rounded hover:bg-lime-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
