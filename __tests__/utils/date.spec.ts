import { getDateInEpoch as mockGetDateInEpoch } from '@utils/date';

const date = new Date(Date.UTC(2021, 10, 2, 1, 8, 20));

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(date);
});

afterEach(() => {
  jest.useRealTimers();
});

jest.mock('@utils/date', () => ({
  getDateInEpoch: jest.fn(() => ['1619914100', '1627862900', '1604279300']),
}));

test('it returns array of dates in epoch time', () => {
  const sixMonthsAgo = (new Date(date).setMonth(new Date(date).getMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(date).setMonth(new Date(date).getMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(date).setFullYear(new Date(date).getFullYear() - 1) / 1000).toFixed();
  const result = mockGetDateInEpoch();
  expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
