import React, { useState, useCallback } from 'react';

function UseCallback() {
  const [count, setCount] = useState(0);

  // Regular function declaration - will cause re-creation on each render
  // const increment = () => {
  //   setCount(count + 1);
  // };

  console.log('render')
  // Using useCallback to memoize the function
  const increment = useCallback(() => {
       setCount((prevCount) => prevCount + 1);
    // setCount( count + 1); // It will increase value only once
  }, []); // The empty dependency array means the function won't change unless count changes
               
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseCallback


