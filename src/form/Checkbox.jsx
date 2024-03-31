///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// SELECT MORE THAN ONE OUT OF MANY
////////////////////////// BASIC OF CHECKBOX (SQUARE SHAPE)

// import React, { useState } from "react";
// 
// export default function CheckBox() {
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Multiple CHECKBOX
/////////////////////////

// import React, { useState } from "react";
// export default function CheckBox() {
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

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// Multiple CHECKBOX
///////////////////////

import React, { useState } from "react";

export default function CheckBox() {
  const [gender, setGender] = useState({});

  // const checkboxOptions = [
  //   { id: 1, interest: "JavaScript" },
  //   { id: 2, interest: "Go" },
  //   { id: 3, interest: "AI" },
  // ];
  const genderOptions = [
    { id: 1, sex: "male" },
    { id: 2, sex: "female" },
    { id: 3, sex: "others" },
  ];
  
  function handleChange(e) {
    const { name, checked } = e.target;
    console.log(name, checked);
    setGender((previousState) => ({
      ...previousState, //If do not return previous state then will get one check only at a time, like radio button
      [name]: checked,
    }));
  }

  return (
    <>
      <h3>Multiple CheckBox</h3>
      <form>
        {genderOptions.map((gen) => (
          <label key={gen.id}>
            {gen.sex}
            <input
              key={gen.id}
              type="checkbox"
              name={gen.sex}
              checked={gender[gen.sex] || false}
              onChange={handleChange}
            />
          </label>
        ))}
      </form>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////







