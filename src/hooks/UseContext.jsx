import { createContext, useContext } from "react"

const SomeContext = createContext();

export default function UseContext(){
    return(
           <SomeContext.Provider value ='SomeValue'>
                <A/>      
           </SomeContext.Provider>
          )
     }

 function A() {
//    const contextValue = useContext(SomeContext)
//    console.log('Inside Nested Component A: ', contextValue);
    return(
          <div>
            <h5>Nested Component A</h5>
            {/* <p>{contextValue}</p> */}
            <B/>
          </div>
         )
}

 function B() {
   const contextValue = useContext(SomeContext);
   console.log('Inside Nested Component B: ', contextValue);
    return(
          <div>
            <h5>Nested Component B</h5>
            <p>{contextValue}</p>
          </div>
         )
}

