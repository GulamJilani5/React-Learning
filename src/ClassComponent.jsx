/////////////////////////////////////////
////////////////////CLASS COMPONENT
// import React, {Component} from "react";
// class ClComponent extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//         count : 0,
//     }
//     this.increase = this.increase.bind(this);
//   }

//   increase(){
//    this.setState({count : this.state.count + 1})
//   }
//   render(){
//     return(
//           <div>
//              <h1>Class component</h1>
//              <p>{this.state.count}</p>
//              <button onClick={this.increase}>Increase</button>
//           </div>               
//          )
//        }
// }

// export default ClComponent;


/////////////////////////////////////////
////////////////FUNCTIONAL COMPONENT
import { useState } from "react"
function FuncComponent(){
  const[count, setCount] = useState(0)

   function increase(){
         setCount(count + 1)
   }
    return (
        <div>
            <h1>functional component</h1>
            <p>{count}</p>
            <button onClick={increase}>increase</button>
        </div>
    )
}

export default FuncComponent;