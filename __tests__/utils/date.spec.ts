import { getUnixTimestamps as mockGetUnixTimestamps } from '@utils/fns/date';
import { getUnixTime, subMonths, subYears } from 'date-fns';

const date = Date.UTC(2021, 11, 10, 13, 0, 0);

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(date);
});

afterEach(() => {
  jest.useRealTimers();
});

jest.mock('@utils/fns/date', () => ({
  getUnixTimestamps: jest.fn(() => [1631275200, 1623326400, 1607605200]),
}));

test('it returns array of dates in epoch time', () => {
  const threeMonthsAgo = getUnixTime(subMonths(date, 3));
  const sixMonthsAgo = getUnixTime(subMonths(date, 6));
  const yearAgo = getUnixTime(subYears(date, 1));

  const result = mockGetUnixTimestamps();

  expect(result).toEqual([threeMonthsAgo, sixMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
