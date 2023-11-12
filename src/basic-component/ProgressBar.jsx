///////////////////////////////////////////////////////////////////////////////
////////////////////////////////

// import React, { useEffect, useState } from "react";
// export default function ProgressBar() {
//   const [progress, setProgress] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (progress < 100) {
//         setProgress(progress + 1);
//       } else {
//         clearInterval(timer);
//       }
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [progress]);
//   return (
//     // <div className="progress-bar" style={{ width: `${progress}%` }}>
//       <p className="progress" style={{ width:`${progress}%` }}>{progress}</p>
//     // </div>
//   );
// }
//  return (
//     <div className="progress-bar" style={{ width: `${progress}%` }}>
//       <p className="progress">
//         <span
//           className="label"
//           style={{
//             position: "absolute",
//             left: `${progress}%`,
//             marginLeft: `${progress}%`,
//           }}
//         >
//           {progress}
//         </span>
//       </p>
//     </div>
//   );

///////////////////////////////////////////////////////////////////////
///////////////////////////////
///////////////
import React, { useState, useEffect } from 'react';

//  export default function ProgressBar(){
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
       if (progress < 100) {
          setProgress(prevProgress => prevProgress + 1);
       }
       else {
          clearInterval(interval);
       }
    }, 1000);
    return () => clearInterval(interval);
  }, [progress]);

  return(
         <div className='progress' style = {{backgroundColor: 'green', position: 'absolute', width:`${progress}%`}}>
           {/*   We can add css externally into App.css*/}
           {/* <span className = {progress === 100 ? 'completed': 'progressing'} style={{color: 'yellow'}}>
           {progress === 100 ? 'Progress Completed': progress}
           </span> 
           */}
           <span style={progress === 100 ? {display:'flex', justifyContent:'center', alignItems:'center', color:'yellow'} : 
                           {display:'flex', justifyContent: 'end', alignItems:'end', color:'yellow'}}>
                       {progress === 100 ? 'Progressbar Completed' : progress}
           </span>
         </div>
       );
};
export default ProgressBar;

