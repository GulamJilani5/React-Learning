// import React from "react";
// import { useState } from "react";

// export default function SelectForms() {
//   const [fruit, setFruit] = useState("");
//   const handleSubmit = () => {};
//   const handleChange = (e) => {
//     const value = e.target.value;
//     console.log(value);
//     setFruit(value);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h3>Select Form</h3>
//         <label>
//           Select Fruit:
//           <select value={fruit} onChange={handleChange}>
//             <option value="apple">Apple</option>
//             <option value="banana">Banana</option>
//             <option value="mango">Mango</option>
//             <option value="orange">Orange</option>
//             <option value="grapes">Grapes</option>
//           </select>
//         </label>
//         <p>You have selected: {fruit}</p>
//       </form>
//     </div>
//   );
// }
///////////////////////////////////////////
////////////////////// MULTIPLE SELECTION
/////////
// import React from "react";

// export default function SelectForms() {
//   return (
//     <div>
//       <form>
//         <h3>Select Form</h3>
//         <label>
//           Select Fruit:
//           <select defaultValue={["apple", "banana"]} multiple={true}>
//             <option value="apple">Apple</option>
//             <option value="banana">Banana</option>
//             <option value="mango">Mango</option>
//             <option value="orange">Orange</option>
//             <option value="grapes">Grapes</option>
//           </select>
//         </label>
//       </form>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////
//////////////////////// MULTIPLE SELECTION WITH STATE HOOKS
/////////

import React from "react";
import { useState } from "react";

export default function SelectForms() {
  const [fruit, setFruit] = useState(["orange", "banana"]);
  const handleSubmit = () => {};
  const handleChange = (e) => {
    const values = e.target.selectedOptions;
    //console.log(values); // HTMLCollecton
    const options = [...values];
    //console.log(options); // Array
    const selectedOptions = options.map((option) => option.value);
    //console.log(selectedOptions); // Arra of values
    setFruit(selectedOptions);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Select Form</h3>
        <label>
          Select Fruit:
          <select multiple={true} defaultValue={fruit} onChange={handleChange}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="mango">Mango</option>
            <option value="orange">Orange</option>
            <option value="grapes">Grapes</option>
          </select>
        </label>
        <p>You have selected: {fruit.join(", ")}</p>
      </form>
    </div>
  );
}
