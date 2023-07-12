export interface Product {
  id: number;
  title: string;
  price: number;
}

export const exampleProducts: Product[] = [
  {
    id: 1,
    title: 'Screwdriver',
    price: 4.99,
  },
  {
    id: 2,
    title: 'Hammer',
    price: 9.99,
  },
];
