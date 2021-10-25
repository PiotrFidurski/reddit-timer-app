import { getDateYearFromNowInEpoch as mockGetDateYearFromNowInEpoch } from '@utils/date';

jest.mock('@utils/date', () => ({
  getDateYearFromNowInEpoch: jest.fn(() => ['1619180447', '1627042847', '1603455647']),
}));

test('it returns time 6, 3 months and year ago in epoch', () => {
  jest.spyOn(Date, 'now').mockImplementation(() => 1634991646894);

  const sixMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(Date.now()).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();

  const result = mockGetDateYearFromNowInEpoch();

  expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
