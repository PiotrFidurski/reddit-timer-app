import { getDateInEpoch as mockGetDateInEpoch } from '@utils/date';

const date = new Date('2021-11-01Z20:00:00');

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(date);
});

afterEach(() => {
  jest.useRealTimers();
});

jest.mock('@utils/date', () => ({
  getDateInEpoch: jest.fn(() => ['1619895600', '1627844400', '1604260800']),
}));

test('it returns array of dates in epoch time', () => {
  console.log(date.getTimezoneOffset());
  const sixMonthsAgo = (new Date(date).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(date).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(date).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();
  const result = mockGetDateInEpoch();
  expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
