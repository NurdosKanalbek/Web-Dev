// models.ts
export interface Product1 {
  id: number;
  name: string;
  description: string;
  imageUrls: string[];
  rating: number;
  link: string;
  likes: number;
}

export interface Category {
  name: string;
  products: Product1[];
}
