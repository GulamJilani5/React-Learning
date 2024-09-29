/*******************************************************************************************************
/******************************************************************************* 
/*************************************** useCallback() and memo() with Real world use case
 ******************* 1) Rednering List of Item which has edit, delete item button
 ******************* 2) Use Case - Online approval system(Form)
/******************************************************************************* 
/*******************************************************************************************************/

// import React, { useState, useCallback } from "react";

// function UseCallback() {
//   const [count, setCount] = useState(0);
//   // Regular function declaration - will cause re-creation on each render
//   // const increment = () => {
//   //   setCount(count + 1);
//   // };

//   console.log("render");
//   // Using useCallback to memoize the function
//   const increment = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//     // setCount( count + 1); // It will increase value only once
//   }, []); // The empty dependency array means the function won't change unless count changes

//   return (
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default UseCallback;

/*****************************************************************************************************
 
Real World Use Cases
1) Rednering List of Item which has edit, delete item button
 Scenario: 
          You have a parent component that renders a list of items, and each item has a delete button. 
          Clicking the delete button should remove the item from the list.

 Problem: Without useCallback, every time the parent component re-renders due to any unrelated state or props change
          ((which does not realted to the deleteItem or item props of the childComponent ), a new delete function 
          is created and passed to child component), causing it(childCompoennt) to re-render unnecessarily.
2)Use Case - Online approval system(Form)
  Scenario: In an online insurance approval system, there is a form with multiple steps. Each step contains a 
          save button that saves the current form data and moves to the next step. The form data is saved in a
          parent component state.
  Problem: Without useCallback, every time the form re-renders (due to state updates), new save functions are 
           created, causing the form steps to re-render unnecessarily.

 *****************************************************************************************************/

///// 1) Rednering List of Item which has edit, delete item button

import React, { useState, useCallback } from "react";
const ParentComponent = () => {
  const [items, setItems] = useState([
    { id: 1, itemValue: "item1" },
    { id: 2, itemValue: "item2 " },
    { id: 3, itemValue: "item3 " },
  ]);

  const deleteItem = useCallback((id) => {
    setItems((prevItems) => prevItems.filter((item) => id !== item.id));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <ChildComponent
          key={item.id}
          items={item.itemValue}
          onDelete={() => deleteItem(item.id)}
        />
      ))}
    </div>
  );
};

// Using React.memo ensures that ChildComponent only re-renders when its props only((item and onDelete) actually change.
// React.memo will prevent the ChildComponent from re-rendering if its props (item and onDelete) have not changed.
// ParentComponent re-renders due to a state change (even unrelated to items or deleteItem), all ChildComponent
// instances will re-render

// Alternate to the 'React.memo()' in class component is the life cylce method shouldComponentUpdate().

const ChildComponent = React.memo(({ items, onDelete }) => (
  <div>
    {items.map((item) => (
      <div>{item.itemValue}</div>
    ))}
    <button onClick={onDelete}>Delete</button>
  </div>
));

export default ParentComponent;
