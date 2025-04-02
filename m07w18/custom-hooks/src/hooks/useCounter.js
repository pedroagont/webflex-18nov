import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const handleClickDecrement = () => setCount(count - 1);
  const handleClickIncrement = () => setCount(count + 1);

  return { count, handleClickDecrement, handleClickIncrement}
}

export default useCounter;
