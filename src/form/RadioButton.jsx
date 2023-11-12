// /////////////////////////////////////////////////////////////////////
// //////////////////////// SELECT ONLY ONE OUT OF MANY
// ///////////////// BASIC RADIO BUTTON (CIRCLE SHAPE)
/*
import react from "react";

function RadioButtonForm() {
  return (
    <>
      <h3>RadioButtonForm</h3>
      <form>
        <label>
          <input
            defaultChecked={true}
            type="radio"
            name="male"
            value="male"
            checked="true"
          />
          Male
        </label>
        <label>
          <input type="radio" name="male" value="female" checked="true" />
          Female
        </label>
        <label>
          <input type="radio" name="male" value="others" checked="true" />
          others
        </label>
      </form>
    </>
  );
}
export default RadioButtonForm;
*/
//////////////////////////////////////////////////////////////////////////
////////////////////////// RADIO BUTTON USING useState() HOOK 
///////////////

// NOTE - Both defaultValue and checked can not be used together in input type = 'radio'

import react, { useState } from "react";
function RadioButtonForm() {
   const [gender, setGender] = useState('');
   function handleChange(e){
    //setGender(e.target.value);
    setGender(e.target.name);
   }
  return (
    <>
      <h3>RadioButtonForm</h3>
      <form>
        <label>
          <input
            type="radio"
            // value="male"
            name="male"
            checked={gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            // value="female"
            name="female"
            checked={gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            // value="others"
            name="others"
            checked={gender === "others"}
            onChange={handleChange}
          />
          Others
        </label>
      </form>
    </>
  );
  }

export default RadioButtonForm;

