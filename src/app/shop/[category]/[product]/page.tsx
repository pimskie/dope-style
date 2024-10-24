import Heading from "@/components/Typography/Heading/Heading";
import { StoreService } from "@/services/store";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

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

  return <ProductDetail product={product}></ProductDetail>;
};

export default ProductDetailPage;
