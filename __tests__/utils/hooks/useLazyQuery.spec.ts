import { act, renderHook } from '@testing-library/react-hooks';
import { useLazyQuery } from '../../../utils/customHooks/useLazyQuery';
import { getData as mockGetData } from '../../../utils/fns/getData';

jest.mock('@utils/fns/getData');

test('toggles "isLoading" state and "isError" state if theres an error', async () => {
  (mockGetData as jest.MockedFunction<jest.Mock>).mockRejectedValueOnce({ result: { data: [] } });

  const { result, waitForNextUpdate } = renderHook(() => useLazyQuery(() => mockGetData('asdasdasd')));

  const triggerQuery = result.current[0];

  act(() => {
    triggerQuery();
  });

  expect(result.current[1].isLoading).toEqual(true);
  expect(result.current[1].inFlight).toEqual(true);

  return waitForNextUpdate().then(() => {
    expect(result.current[1].isLoading).toBe(false);
    return expect(result.current[1].isError).toBe(true);
  });
});

test('toggles "isLoading" state and "isSuccess" on successful query', async () => {
  (mockGetData as jest.MockedFunction<jest.Mock>).mockResolvedValueOnce({ result: { data: [] } });

  const { result, waitForNextUpdate } = renderHook(() => useLazyQuery(() => mockGetData('webdev')));

  const triggerQuery = result.current[0];
  act(() => {
    triggerQuery();
  });

  expect(result.current[1].isLoading).toEqual(true);

  return waitForNextUpdate().then(() => {
    expect(result.current[1].isLoading).toBe(false);
    return expect(result.current[1].isSuccess).toBe(true);
  });
});
