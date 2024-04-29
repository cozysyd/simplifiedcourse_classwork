import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1);
  }

  return <h1 onClick={counter}>Counter: {count}</h1>;
}

export default App;
