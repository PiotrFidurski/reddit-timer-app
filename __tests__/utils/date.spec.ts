import { getDateInEpoch as mockGetDateInEpoch } from '@utils/date';

jest.mock('@utils/date', () => ({
  getDateInEpoch: jest.fn(() => ['1619862245', '1627811045', '1604227445']),
}));

test('it returns array of dates in epoch time', () => {
  jest.spyOn(Date, 'now').mockImplementation(() => 1635763444799);

  const sixMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  const threeMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  const yearAgo = (new Date(Date.now()).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();

  const result = mockGetDateInEpoch();

  expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
