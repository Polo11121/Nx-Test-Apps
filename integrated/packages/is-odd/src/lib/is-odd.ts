import { isEven } from '@myorg/is-even';

export const isOdd = (n: number): boolean => !isEven(n);
