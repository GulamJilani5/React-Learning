////////////////////////////////////////////////////////////////////
//////////////////////// Select Options
///////// ***value attribute required

import React, { useState } from "react";

const SelectExample = () => {
  // State to manage selected hobby
  const [selectedHobby, setSelectedHobby] = useState("");

  // Handling select dropdown change
  const handleSelectChange = (event) => {
    setSelectedHobby(event.target.value);
  };

  return (
    <div>
      <h2>Select a Hobby</h2>

      <select value={selectedHobby} onChange={handleSelectChange}>
        <option value="">--Choose a hobby--</option>
        <option value="cricket">Cricket</option>
        <option value="volleyball">Volleyball</option>
        <option value="tennis">Tennis</option>
      </select>

      <h3>Selected Hobby: {selectedHobby}</h3>
    </div>
  );
};

export default SelectExample;

/////////////////////////////////////////////////////
////////////////// Select more than one value
/*
import React from "react";
import { useState } from "react";

export default function SelectForms() {
  const [fruit, setFruit] = useState(["orange", "banana"]);
  const handleSubmit = () => {};

  const handleChange = (e) => {
    ///1) HTMLCollecton
    const values = e.target.selectedOptions;
    //console.log(values);
    ///2) spreading and getting Array
    const options = [...values];
    //console.log(options); // Array
    /// getting the values
    const selectedOptions = options.map((option) => option.value);
    //console.log(selectedOptions); // Array of values
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

*/
