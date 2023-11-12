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
//////////////////////////////// INCREASING THE VALUE COUNTER 
///////////////////  VALUE WILL GET INCREMENT WHENEVER WE MAKE CHANGEs...
/////////////////////...IN THE CODE(**COULD NOT PEROPERLY UNDERSTAND)
// import { useRef } from "react"
// export default function UseRef(){
// const inputRef = useRef(0);

//    function increase(){
//      inputRef.current += 1;
//    }
//     return(
//         <div>
//            <h1>Using useRef to increment counter</h1>
//             <p>{inputRef.current}</p>
//            <button onClick={increase}>increment</button>
//         </div>
//     )
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// STYLING AN ELEMENT
///////////////////  
import { useRef } from "react"
export default function UseRef(){
const inputRef = useRef(0);

   function increase(){
     if(inputRef.current){
        inputRef.current.style.backgroundColor = 'red'
     }
    }
    return(
        <div>
           <h1>Using useRef to change style on an element</h1>
              <p ref={inputRef}>SomeValue</p>
           <button onClick={increase}>increment</button>
        </div>
    )
}
