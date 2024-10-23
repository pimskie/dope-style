import Heading from "@/components/Typography/Heading/Heading";
import { StoreService } from "@/services/store";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./Product.module.css";

type Props = {
  params: { product: string };
};

const ProductDetailPage = async ({
  params: { product: productSlug },
}: Props) => {
  const product = await StoreService.product.where([
    {
      field: "slug",
      operator: "==",
      value: productSlug,
    },
  ]);

  if (!product) {
    return notFound();
  }

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
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
