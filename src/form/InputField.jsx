//////////////////////////////////////////////////////////////////
////////////////////////////// SIMPLE INPUT WITH ONE VALUE
//////////////////

// import React from "react";
// import { useState } from "react";

// export default function InputForms() {
//   const [name, setName] = useState("");
//   const handleSubmit = () => {};
//   const handleChange = (e) => {
//     const value = e.target.value;
//     console.log(value);
//     setName(value);
//   };
//   return (
//     <>
//       <h3>Basic Input</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           //   style={{ backgroundColor: "grey" }}
//           type="text"
//           name={name}
//           value={name}
//           onChange={handleChange}
//         />
//         {/* <input type="text" name={name} value={name} onChange={()=>setName(e.target.value)} /> */}
//       </form>
//     </>
//   );
// }
//////////////////////////////////////////////////////////////////
////////////////////////////// MULTIPLE VALUES
//////////////////

import React from "react";
// import { useId } from "react";
import { useState } from "react";

export default function SignForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //const inputId = useId()
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // perform some action with sign up data
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const { value } = e.target;
    console.log(name, value);
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <h3> Sign Up </h3>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor={inputId}>Username</label> */}
        <label htmlFor={formData.username}>Username</label>
        <input
          id={formData.username}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {/* <label>
          <input type="text" name={formData.username} value={formData.username} onChange={ handleChange} />
        </label> */}
        <hr />
        <label htmlFor={formData.email}>Email</label>
        <input
          id={formData.email}
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <hr />
        <label htmlFor={formData.password}>Password</label>
        <input
          id={formData.password}
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <hr />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
