import * as React from 'react';

function Example() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Hello World</p>
      <span>count: {count}</span>
      <button type="button" name="increment" onClick={() => setCount((currentCount) => currentCount + 1)}>
        increment
      </button>
    </div>
  );
}

export default Example;
