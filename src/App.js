import { useCallback, useMemo, useState } from "react";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  function fibonacci(n) {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  console.time('fibonacci');
  const result = useMemo(() => {
    return fibonacci(43);
  }, []);
  console.timeEnd('fibonacci');

  const [total] = useState(30);

  // const submitForm = useCallback(() => {
  //   alert('SUBMITTED');
  // }, []);  // Compare by Object.is()

  const submitForm = useMemo(() => {
    return () => {
      alert('SUBMITTED');
    }
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Form total={total} submitForm={submitForm} />
    </>    
  );
}

export default App;
