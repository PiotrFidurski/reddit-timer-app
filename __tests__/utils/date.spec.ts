import { getDateInEpoch as mockGetDateInEpoch } from '@utils/date';

const date = new Date(Date.UTC(2021, 11, 10, 13, 0, 0));

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(date);
});

afterEach(() => {
  jest.useRealTimers();
});

jest.mock('@utils/date', () => ({
  getDateInEpoch: jest.fn(() => ['1631278800', '1623330000', '1607605200']),
}));

test('it returns array of dates in epoch time', () => {
  const sixMonthsAgo = (new Date(date).setUTCMonth(new Date(date).getUTCMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(date).setUTCMonth(new Date(date).getUTCMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(date).setUTCFullYear(new Date(date).getUTCFullYear() - 1) / 1000).toFixed();

  const result = mockGetDateInEpoch();

  expect(result).toEqual([threeMonthsAgo, sixMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
