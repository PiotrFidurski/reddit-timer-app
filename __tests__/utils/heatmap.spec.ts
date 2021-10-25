import { getDayAndHour as mockGetDatAndHour, initialState } from '@utils/heatmap';

test('"getDayAndHour" returns correct day and hour integer', () => {
  jest.mock('@utils/heatmap', () => ({
    getDayAndHour: jest.fn(() => [2, 19]),
  }));

  const mockPost = {
    created_utc: 1623778177,
    id: '1',
    author: 'Thomas',
    title: 'hello',
  };

  const result = mockGetDatAndHour(mockPost);

  expect(result).toEqual([2, 19]);
});

test('"initialState" returns correct two dimensional array', () => {
  const result = initialState();

  expect(result).toEqual(new Array(7).fill([]).map(() => new Array(24).fill([])));
});

// eslint-disable-next-line jest/no-export
export {};
