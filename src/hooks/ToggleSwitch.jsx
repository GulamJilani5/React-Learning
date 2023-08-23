///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////UI component that is importing and using custom component
import useToggle from "./useToggle";

export default function ToggleSwitch(){
    
    // const {state, toggle} = useToggle(true); // We can pass default value to useToggle custom hook
    const {state, toggle} = useToggle();
    // console.log(state)
    // console.log(toggle)
    //We can destructure custom hook value as per our component value 
   //const {state : showData, toggle:toggleData} = useToggle(); 
    return (
        <>
           <h1>Toggle Switch Using Custom Hook</h1>
           <button onClick={toggle}>{state ? 'Hide Text': 'Show Text'}</button>
           {state && <p>Some Text...</p> }
        </>
    )
}