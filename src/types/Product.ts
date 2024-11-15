interface description {
  nl: string;
  en: string;
  it: string;
}
interface ProductDocument {
  name: string;
  price: number;
  stock: number;
  image: string;
  slug: string;
  description: description;
}

interface Product extends ProductDocument {
  id: string;
}

export type { ProductDocument, Product };
