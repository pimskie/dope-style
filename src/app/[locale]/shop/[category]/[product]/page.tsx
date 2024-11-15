import { StoreService } from "@/services/store";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { Locale } from "@/types/Locale";

type Props = {
  params: { product: string; locale: Locale };
};

const ProductDetailPage = async ({
  params: { product: productSlug, locale },
}: Props) => {
  try {
    const [product] =
      (await StoreService.product.where([
        {
          field: "slug",
          operator: "==",
          value: productSlug,
        },
      ])) || [];

    if (!product) {
      return notFound();
    }

    return <ProductDetail product={product} locale={locale}></ProductDetail>;
  } catch (error) {
    return notFound();
  }
};

export default ProductDetailPage;
