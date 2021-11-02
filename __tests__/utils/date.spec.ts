import { getDateInEpoch as mockGetDateInEpoch } from '@utils/date';

const date = new Date('November 02, 2021 1:00:00');

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(date);
});

afterEach(() => {
  jest.useRealTimers();
});

jest.mock('@utils/date', () => ({
  getDateInEpoch: jest.fn(() => ['1619917200', '1627866000', '1604278800']),
}));

test('it returns array of dates in epoch time', () => {
  console.log(date.getTimezoneOffset());
  const sixMonthsAgo = (new Date(date).setMonth(new Date(date).getMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(date).setMonth(new Date(date).getMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(date).setFullYear(new Date(date).getFullYear() - 1) / 1000).toFixed();
  const result = mockGetDateInEpoch();
  expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
