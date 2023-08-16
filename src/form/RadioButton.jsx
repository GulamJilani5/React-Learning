// /////////////////////////////////////////////////////////////////////
// //////////////////////// BASIC RADIO BUTTON (CIRCLE SHAPE)
// /////////////////
// import react from "react";

// function RadioButtonForm() {
//   return (
//     <>
//       <h3>RadioButtonForm</h3>
//       <form>
//         <label>
//           <input
//             defaultChecked={true}
//             type="radio"
//             name="male"
//             value="male"
//             checked="true"
//           />
//           Male
//         </label>
//         <label>
//           <input type="radio" name="male" value="female" checked="true" />
//           Female
//         </label>
//         <label>
//           <input type="radio" name="male" value="others" checked="true" />
//           others
//         </label>
//       </form>
//     </>
//   );
// }

// export default RadioButtonForm;
/////////////////////////////////////////////////////////////////////
//////////////////////RADIO BUTTON USING useState() HOOk
///////////////

// NOTE - Both defaultValue and checked can not be used together in input type = 'radio'
import react, { useState } from "react";

export default function RadioButtonForm() {
  const [gender, setGender] = useState("");
  const handleChange = (e) => {
    setGender(e.target.name);
    // setGender(e.target.value);   // We can use either value or name
  };
  return (
    <>
      <h3>RadioButtonForm</h3>
      <form>
        <label>
          <input
            type="radio"
            name="male"
            // value="male"
            checked={gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="female"
            // value="female"
            checked={gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="others"
            // value="others"
            checked={gender === "others"}
            onChange={handleChange}
          />
          others
        </label>
      </form>
    </>
  );
}
