import { exampleProducts } from './products';

describe('products', () => {
  it('should work', () => {
    expect(exampleProducts.length).toEqual(2);
  });
});
