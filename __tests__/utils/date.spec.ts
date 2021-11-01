import { getDateInEpoch as mockGetDateInEpoch } from '@utils/date';

const FIXED_SYSTEM_TIME = 1635793200000;

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(FIXED_SYSTEM_TIME);
});

afterEach(() => {
  jest.useRealTimers();
});

jest.mock('@utils/date', () => ({
  getDateInEpoch: jest.fn(() => ['1619895600', '1627844400', '1604257200']),
}));

test('it returns array of dates in epoch time', () => {
  console.log(new Date(FIXED_SYSTEM_TIME), new Date('2021-11-01Z19:00:00'));

  const sixMonthsAgo = (new Date(FIXED_SYSTEM_TIME).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(FIXED_SYSTEM_TIME).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(FIXED_SYSTEM_TIME).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();
  const result = mockGetDateInEpoch();
  expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
