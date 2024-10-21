interface ProductDocument {
  name: string;
  price: number;
  stock: number;
  image: string;
}

interface Product extends ProductDocument {
  id: string;
}

export type { ProductDocument, Product };
