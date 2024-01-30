import React, { useState, useEffect } from "react";

const DogApp = () => {
  const [count, setCount] = useState(0);
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    console.log("useEffect is running");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setIsRun(!isRun)}>RUN useEffect</button>
    </div>
  );
};

export default DogApp;
