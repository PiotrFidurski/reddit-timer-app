import * as React from 'react';

interface InitialState<T> {
  shouldRun: boolean;
  status: 'idle' | 'error' | 'success' | 'loading';
  data: T;
  error: string;
  inFlight: boolean;
}

const initialState = {
  data: undefined,
  status: 'idle',
  shouldRun: false,
  error: undefined,
  inFlight: false,
};

function useLazyQuery<T>(callback: () => Promise<T>): [
  () => void,
  {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    isIdle: boolean;
    status: 'idle' | 'error' | 'success' | 'loading';
    data: T;
    inFlight: boolean;
  }
] {
  const [{ status, data, shouldRun, inFlight }, setQueryState] = React.useState<InitialState<T>>(
    initialState as InitialState<T>
  );

  const callbackRef = React.useRef<() => Promise<T>>(null);

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isSuccess = status === 'success';

  callbackRef.current = callback;

  const runQuery = () => {
    setQueryState((state) => ({ ...state, shouldRun: false, inFlight: true }));
    callbackRef
      .current()
      .then((result) =>
        setQueryState((state) => ({ ...state, shouldRun: false, data: result, status: 'success', inFlight: false }))
      )
      .catch((e) => {
        setQueryState((state) => ({ ...state, status: 'error', inFlight: false }));
        return e;
      });
  };

  React.useEffect(() => {
    if (shouldRun) {
      setQueryState((state) => ({ ...state, status: 'loading' }));
      runQuery();
    }

    return () => setQueryState((state) => ({ ...state, shouldRun: false }));
  }, [shouldRun]);

  function triggerQuery() {
    setQueryState((state) => ({ ...state, shouldRun: true }));
  }

  return [triggerQuery, { isLoading, isError, isSuccess, isIdle, status, data, inFlight }];
}

export { useLazyQuery };
