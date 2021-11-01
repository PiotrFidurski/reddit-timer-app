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
  getDateInEpoch: jest.fn(() => ['1619892000', '1627840800', '1604257200']),
}));

test('it returns array of dates in epoch time', () => {
  console.log(new Date(1635793200000), new Date('2021-11-01Z19:00'));

  const sixMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(Date.now()).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();
  const result = mockGetDateInEpoch();
  expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
