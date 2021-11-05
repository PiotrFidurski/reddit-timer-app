import { CompareProps } from '@types';

function compare({ postA, postB, type, order }: CompareProps) {
  return order === 'DESC' ? postB[type] - postA[type] : postA[type] - postB[type];
}

export { compare };
