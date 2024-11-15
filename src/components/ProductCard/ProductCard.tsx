import { Link } from "@/i18n/routing";

import { formatCurrency } from "@/utils/intl/formatNumber";
import styles from "./ProductCard.module.css";
import type { Product } from "@/types/Product";

import { useTranslations } from "next-intl";

interface Props {
  product: Product;
  slug?: string;
}

const defaultProps: Partial<Props> = {
  slug: "product",
};

const ProductCard = (props: Props) => {
  const t = useTranslations("cta");

  const propsWithDefaults: Props = {
    ...defaultProps,
    ...props,
  };

  const { product, slug } = propsWithDefaults;

  return (
    <Link href={`/shop/${slug}/${product.slug}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardImageContainer}>
          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className={styles.cardImage}
          />
        </div>

        <div className={styles.cardContent}>
          <div className={styles.cardContentName}>
            <h2>{product.name}</h2>
          </div>

          <div className={styles.cardFooterPrice}>
            {formatCurrency(product.price)}
          </div>
        </div>

        <div className={styles.cardCta}>
          <span>{t("seeMore")}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
