import { useReducer } from "react"

export default function UseReducer() {
  
   function reducer(state, action){
    // console.log('inside reduce value of state',state)
        if(action.type === 'INCREAMENT'){
          return {age : state.age + 1};
        }
        throw Error('Unknown action type error', action.type)
     }
     const initialState = {
      age:23,
    }
   const[state, dispatch] = useReducer(reducer, initialState)

   function increamentAge(){
        dispatch({type:'INCREAMENT'})       
    }
    return (
          <div>
            <h1>useReducer</h1>
            <button onClick={increamentAge}>increase age</button>
            {/*We can dispatch an action and payload from onClick attributes of button without creating any event handler function */}
            {/* <button onClick={() =>  dispatch({ type: 'INCREAMENT' }) }>increase age</button> */}
            <p>Your age : {state.age}</p> 
          </div>   
       )

}