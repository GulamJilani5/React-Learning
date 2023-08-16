/////////////////////////////////////////////////////////////////
///////////////////////BASIC OF CHECKBOX (SQUARE SHAPE)
/////////////
// import React, { useState } from "react";

// export default function CheckBoxForm() {
//   const [isChecked, setIsChecked] = useState(false);
//   const handleChange = (e) => {
//     //const check = e.target.checked;
//     //console.log(check);
//     setIsChecked(!isChecked);
//   };
//   return (
//     <>
//       <h3>Basic of CheckBox</h3>
//       <form>
//         <label htmlFor="gender">CheckBox</label>
//         <input
//           id="gender"
//           type="checkbox"
//           checked={isChecked}
//           onChange={handleChange}
//         />
//       </form>
//     </>
//   );
// }

/////////////////////////////////////////////
/////////////////////// Multiple CHECKBOX
///////////

// import React, { useState } from "react";
// export default function CheckBoxForm() {
//   const [values, setValues] = useState({
//     gender: false,
//     single: false,
//   });
//   const handleChange = (e) => {
//     //const check = e.target.checked; // will give true or false
//     //console.log(check);
//     const name = e.target.name;
//     setValues((previousState) => ({
//       ...previousState, //If do not return previous state then will get one check only
//       [name]: !previousState[name],
//     }));
//   };
//   return (
//     <>
//       <h3>Multiple CheckBox</h3>
//       <form>
//         {Object.keys(values).map((key) => (
//           <label key={key}>
//             {/* {console.log(values[key])} // If value is present in the object then it will give true otherwise false */}
//             {key}
//             <input
//               key={key}
//               type="checkbox"
//               name={key}
//               checked={values[key]}
//               onChange={handleChange}
//             />
//           </label>
//         ))}
//       </form>
//     </>
//   );
// }

/////////////////////////////////////////////
/////////////////////// Multiple CHECKBOX
///////////

import React, { useState } from "react";

export default function CheckBoxForm() {
  const [hobby, setHobby] = useState({});

  const checkboxOptions = [
    { id: 1, interest: "JavaScript" },
    { id: 2, interest: "Go" },
    { id: 3, interest: "AI" },
  ];
  function handleChange(e) {
    const { name, checked } = e.target;
    console.log(name, checked);

    setHobby((previousState) => ({
      ...previousState, //If do not return previous state then will get one check only at a time, like radio button
      [name]: checked,
    }));
  }
  return (
    <>
      <h3>Multiple CheckBox</h3>
      <form>
        {checkboxOptions.map((option) => (
          <label key={option.id}>
            {option.interest}
            <input
              key={option.id}
              type="checkbox"
              name={option.interest}
              checked={hobby[option.interest] || false}
              onChange={handleChange}
            />
          </label>
        ))}
      </form>
    </>
  );
}
