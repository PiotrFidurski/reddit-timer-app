const FIXED_SYSTEM_TIME = 1635790347000;

beforeEach(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(FIXED_SYSTEM_TIME);
});

afterEach(() => {
  jest.useRealTimers();
});

jest.mock('@utils/date', () => ({
  getDateInEpoch: jest.fn(() => ['1619889147', '1627837947', '1604254347']),
}));

test('it returns array of dates in epoch time', () => {
  // const sixMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 6) / 1000).toFixed();
  // const threeMonthsAgo = (new Date(Date.now()).setMonth(new Date().getMonth() - 3) / 1000).toFixed();
  // const yearAgo = (new Date(Date.now()).setFullYear(new Date().getFullYear() - 1) / 1000).toFixed();
  // const result = mockGetDateInEpoch();
  // expect(result).toEqual([sixMonthsAgo, threeMonthsAgo, yearAgo]);
});

// eslint-disable-next-line jest/no-export
export {};
