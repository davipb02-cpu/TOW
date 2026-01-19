export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  detailImage: string;
  specs: ProductSpec[];
  tag?: string;
}
