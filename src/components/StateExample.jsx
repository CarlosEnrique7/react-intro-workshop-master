import { useState } from "react";

const StateExample = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}></button>
    </div>
  );
};

export default StateExample;
