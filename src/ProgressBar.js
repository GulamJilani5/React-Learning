import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [progress]);
  return (
    <div className="progress-bar" style={{ width: `${progress}%` }}>
      <p className="progress">{progress}</p>
    </div>
  );
}

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
