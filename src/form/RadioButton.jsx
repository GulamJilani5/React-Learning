///////////////////////////////////////////////////////////////////////
////////////////////////// SELECT ONLY ONE OUT OF MANY
/////////////////// CIRCLE SHAPE
///// ***value and checked attribute is requried.

import React, { useState } from "react";

const RadioButtonExample = () => {
  // State to manage gender selection
  const [gender, setGender] = useState("");

  // Handling radio button changes
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <h2>Select Gender</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleGenderChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
        Female
      </label>

      <h3>Selected Gender: {gender}</h3>
    </div>
  );
};

export default RadioButtonExample;
