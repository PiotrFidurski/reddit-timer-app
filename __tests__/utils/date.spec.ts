import { getDateInEpoch as mockGetDateInEpoch } from '@utils/date';

jest.mock('@utils/date', () => ({
  getDateInEpoch: jest.fn(() => ['1594422000', '1602370800', '1578700800']),
}));

jest.useFakeTimers().setSystemTime(new Date('2021-01-11').getTime());

test('it returns array of dates in epoch time', () => {
  jest.spyOn(Date, 'now').mockImplementation(() => 1610323200000);

  const sixMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(Date.now()).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();

  const result = mockGetDateInEpoch();

  expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
