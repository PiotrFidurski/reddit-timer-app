import { InitialQueryState, LazyQueryProps } from '@types';
import * as React from 'react';

const initialState = {
  data: undefined,
  status: 'idle',
  shouldRun: false,
  errorMessage: '',
  inFlight: false,
};

function useLazyQuery<T>(callback: () => Promise<T>): LazyQueryProps<T> {
  const [{ status, data, shouldRun, inFlight, errorMessage }, setQueryState] = React.useState<InitialQueryState<T>>(
    initialState as InitialQueryState<T>
  );

  const callbackRef = React.useRef<() => Promise<T> | null>(null);

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isSuccess = status === 'success';

  callbackRef.current = callback;

  const runQuery = () => {
    setQueryState((state) => ({ ...state, shouldRun: false, inFlight: true }));
    callbackRef
      .current()
      ?.then((result) =>
        setQueryState((state) => ({ ...state, shouldRun: false, data: result, status: 'success', inFlight: false }))
      )
      .catch((error: { message: string }) => {
        setQueryState((state) => ({ ...state, status: 'error', inFlight: false, errorMessage: error.message }));
      });
  };

  React.useEffect(() => {
    if (shouldRun) {
      setQueryState((state) => ({ ...state, status: 'loading' }));
      runQuery();
    }
  }, [shouldRun]);

  const triggerQuery = React.useCallback(() => {
    setQueryState((state) => ({ ...state, shouldRun: true }));
  }, []);

  return [triggerQuery, { isLoading, isError, isSuccess, isIdle, status, data, errorMessage, inFlight }];
}

export { useLazyQuery };
