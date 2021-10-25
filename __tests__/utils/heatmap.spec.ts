import { initialState } from '@utils/heatmap';

test('"initialState" returns correct array that resembles weekdays and hours', () => {
  const result = initialState();

  expect(result).toEqual(new Array(7).fill([]).map(() => new Array(24).fill([])));
});

// eslint-disable-next-line jest/no-export
export {};
