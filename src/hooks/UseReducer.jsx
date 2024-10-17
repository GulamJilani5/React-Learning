///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////

/////// useReducer is very similar to useState, but it lets you move the state update logic to
//////  event handlers into a single function outside of your component.

// import { useReducer } from "react";

// //reducer function and initial state usually remain outside the component.
// function reducer(state, action) {
//   //console.log('inside reducer the value of state is: ',state)
//   if (action.type === "INCREMENT") {
//     // return {age : state.age + 1};
//     return { age: state.age + action.payload };
//   }
//   throw Error("Unknown action type error", action.type);
// }

// // Initial state
// // const initialState = {
// //   age: 24,
// // };

// // Component
// export default function UseReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function incrementAge() {
//     // dispatch({type:'INCREAMENT'})
//     dispatch({ type: "INCREMENT", payload: 10 });
//   }

//   return (
//     <div>
//       <h1>useReducer</h1>
//       <button onClick={incrementAge}>Increase Age</button>
//       {/*We can dispatch an action and payload from onClick attributes of button without creating any event handler function */}
//       {/* <button onClick={() =>  dispatch({ type: 'INCREMENT' }) }>Increase Age</button> */}
//       <p>Your age : {state.age}</p>
//     </div>
//   );
// }

/////// useReducer is very similar to useState, but it lets you move the state update logic from
//////  event handlers into a single function outside of your component.

import { useReducer } from "react";

//reducer function and initial state usually remain outside the component.
function reducer(state, action) {
  //console.log('inside reduce value of state',state)
  if (action.type === "INCREMENT") {
    // return {age : state.age + 1};
    return { age: state.age + action.payload };
  }
  throw Error("Unknown action type error", action.type);
}

const initialState = {
  age: 24,
};
// Component
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increamentAge() {
    // dispatch({type:'INCREAMENT'})
    dispatch({ type: "INCREMENT", payload: 10 });
  }

  return (
    <div>
      <h1>useReducer</h1>
      <button onClick={increamentAge}>increase age</button>
      {/*We can dispatch an action and payload from onClick attributes of button without creating any event handler function */}
      {/* <button onClick={() =>  dispatch({ type: 'INCREMENT' }) }>increase age</button> */}
      <p>Your age : {state.age}</p>
    </div>
  );
}
