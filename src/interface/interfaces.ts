export interface IFormDataPayload {
  id?: string;
  // productId: string;
  name: string;
  category: string;
  description: string;
  colors: string[];
  sizes: string[];
  price: number;
  inStock: boolean;
  reviews: number;
  imageURL: string;
  relatedProducts?: string[]
}

export interface CartState {
  count: number;
  subTotal: number;
  tax: number;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  imageURL: string;
  qtd: number;
  price: number;
  color: string;
  size: string;
}
