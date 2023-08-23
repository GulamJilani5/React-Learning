5////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// CUSTOM HOOK - Start with 'use' like - useWhatever
/////////////// JavaScript function that utilizes one or more built-in React hooks to 
//////////////  encapsulate and share logic across multiple components.
///////// We have created custom hook so that any other component can use it by importing it. 
///////// Like - UI component ToggleSwitch.jsx uses custom component useToggle.jsx 

import { useState } from "react"

 const useToggle = (initialValue = false) => {
     const [state, setState] = useState(initialValue);
    
     const toggle = ()=> {
         setState(!state)
    }
   return {state, toggle}
}

export default useToggle


