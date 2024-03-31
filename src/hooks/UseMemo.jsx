////////////////////////////////////////////////////////////
////////////////////////////
////
import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [number, setNumber] = useState(0);

  const squaredNumber = useMemo(() => {
    console.log("Calculating squared number...");
    return number ** 2;
  }, [number]);

  return (
    <div>
      <p>Number: {number}</p>
      <p>Squared Number: {squaredNumber}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
}

export default UseMemo;






