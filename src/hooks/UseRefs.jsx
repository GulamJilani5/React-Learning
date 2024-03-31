////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// Create mutable objects (ref objects) to hold values that persist across renders without causing
//////  the component to re-render.
/////   Reference a value that’s not needed for rendering.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// WHEN CLICK ON BUTTON INPUT ELEMENT WILL GET THE FOCUS
/////////////////// 
// import { useRef } from "react"
// export default function UseRef(){
// const inputRef = useRef();
//    function handleClick(){
//       inputRef.current.focus()
//    }
//     return(
//         <div>
//           <h1>Using useRef() to get focus on input element</h1>
//            <input type="text" ref={inputRef}/>
//            <button onClick={handleClick}>changeFocus</button>
//         </div>
//     )
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////
/*
import React, { useRef, useEffect } from 'react';
const ExampleComponent = () => {
  // Create a ref object
  const myRef = useRef(null);
  // Use the ref in a component
  useEffect(() => {
    // Access the current property of the ref to get the DOM element
    const element = myRef.current;
    // Do something with the element, e.g., focus on it
    if (element) {
      element.focus();
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts
  return (
    <input ref={myRef} type="text" />
  );
};
export default ExampleComponent;
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// READING THE VALUE OF THE INPUT ELEMENT
///////////////////
//  import { useRef } from "react"
//  export default function UseRef(){
//  const inputRef = useRef('');
//    function handleClick(){
//      const value = inputRef.current.value;
//      console.log(value)
//    }
//     return(
//         <div>
//           <h1>Using useRef to access value of an element</h1>
//            <input type="text" ref={inputRef}/>
//            <button onClick={handleClick}>Get Input Value</button>
//         </div>
//     )
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// INCREASING THE VALUE COUNTER 
/////////////////////////  VALUE WILL GET INCREMENT WHENEVER WE MAKE CHANGES...
/////////////////////...IN THE CODE(**COULD NOT PEROPERLY UNDERSTAND), Reason--> It is not right use case
//////////////////// of the 'useRef' hook, because it is not useful when needed for re-rendering.
/////////////////// So, for this purspose we should use useState() hook.
import { useRef } from "react";
export default function UseRef(){
  const inputRef = useRef(0);

  function increase(){
     inputRef.current += 1;
     console.log(inputRef);
   }
    return(
         <div>
            <h1>Using useRef to increment counter</h1>
              <p>{inputRef.current}</p>
             <button onClick={increase}>increment</button>
         </div>
       )
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// STYLING AN ELEMENT
/////////////////// I added useState() to toggle the color as we click on it.
/*
import { useState } from "react";
import { useRef } from "react";

export default function UseRef() {
  
  const [iscolored, setIsColored] = useState(true)

const inputRef = useRef(0);

  function increase() {
   
     {iscolored ? setIsColored(false) : setIsColored(true)}
     if (iscolored) {
        inputRef.current.style.backgroundColor = 'red'
     }
     else {
       inputRef.current.style.backgroundColor = "";
     }
    
      //  if (inputRef.current) {
      //     inputRef.current.style.backgroundColor = 'red'
      //  }
    
    }
    return(
        <div>
           <h1>Using useRef to change style on an element</h1>
              <p ref={inputRef}>SomeValue</p>
           <button onClick={increase}>increment</button>
        </div>
    )
}
*/
