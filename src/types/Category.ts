import type { Product } from "./Product";
interface CategoryDocument {
  name: string;
  image: string;
  products?: Product[];
  leader: string;
  description: string;
}

interface Category extends CategoryDocument {
  id: string;
}

export type { Category, CategoryDocument };
