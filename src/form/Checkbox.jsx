///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// SELECT MORE THAN ONE OUT OF MANY
////////////////////////// SQUARE SHAPE
////// ***name and checked attribute is required

import React, { useState } from "react";

const CheckboxExample = () => {
  // State to manage multiple hobbies
  const [hobbies, setHobbies] = useState({
    cricket: false,
    volleyball: false,
    tennis: false,
  });

  // Handling checkbox changes
  const handleHobbyChange = (event) => {
    const { name, checked } = event.target;
    setHobbies((prevHobbies) => ({
      ...prevHobbies,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h2>Select Your Hobbies</h2>

      <label>
        <input
          type="checkbox"
          name="cricket"
          checked={hobbies.cricket}
          onChange={handleHobbyChange}
        />
        Cricket
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="volleyball"
          checked={hobbies.volleyball}
          onChange={handleHobbyChange}
        />
        Volleyball
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="tennis"
          checked={hobbies.tennis}
          onChange={handleHobbyChange}
        />
        Tennis
      </label>

      <h3>Your Selected Hobbies:</h3>
      <ul>
        {hobbies.cricket && <li>Cricket</li>}
        {hobbies.volleyball && <li>Volleyball</li>}
        {hobbies.tennis && <li>Tennis</li>}
      </ul>
    </div>
  );
};

export default CheckboxExample;
