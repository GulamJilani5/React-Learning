///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// CSS PART IS Using styled component
///////////// ACTUAL QUESTION ASKED IN IBM

import React from "react";

import styled from "styled-components";

export default function IBMFormLayout() {
  return (
    <Wrapper>
      <input type="text" className="first-name" placeholder="first-name" />
      <input type="text" className="last-name" placeholder="last-name" />
      <input type="text" className="email" placeholder="email" />
      <input type="text" className="address" placeholder="address" />
      <input type="text" className="profession" placeholder="profession" />
      <input type="text" className="age" placeholder="age" />
      <input
        type="text"
        className="mobile-number"
        placeholder="mobile-number"
      />
      <input type="text" className="skype" placeholder="skype" />
      <input type="text" className="submit" placeholder="submit" />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  margin: 4vw 4vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .first-name {
    grid-column: span 4;
  }
  .last-name {
    grid-column: span 4;
  }
  .email {
    grid-column: span 4;
  }
  .address {
    grid-column: 1/-1;
  }
  .profession {
    grid-column: span 6;
  }
  .age {
    grid-column: span 6;
  }
  .mobile-number {
    grid-column: span 6;
  }
  .skype {
    grid-column: span 6;
  }

  .submit {
    grid-column: 1/-1;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////
//////////// Using CSS Module

/*
export default function IBMFormLayout() {
  return (
    <div>
        <h2>Question Asked in IBM Programming Round </h2>
        <form>
           <div className='first-row'>
            <input type="text" className='first-name' placeholder='first-name'/>
            <input type="text" className='last-name' placeholder='last-name'/>
            <input type="text" className='email' placeholder='email'/>
           </div>
           <div className='second-row'>
           <input type="text" className='address' placeholder='address'/>
           </div>
           <div className='third-row'>
            <input type="text" className='profession' placeholder='profession'/>
            <input type="text" className='age' placeholder='age'/>
           </div>
           <div className='fourth-row'>
            <input type="text" className='mobile-number' placeholder='mobile-number'/>
            <input type="text" className='skype' placeholder='skype'/>
           </div>
           <div className='fifth-row'>

           <input type="text" className='submit' placeholder='submit'/>
           </div>
         </form>
    </div>
  )
}
*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// METHOD 3
//////////// BOOTSTRAP

/*
export default function IBMFormLayout() {
  return (
    <div>
        <h2>Question Asked in IBM Programming Round </h2>
        <form>
           <div className='row'>
            <input type="text" className='col-12 col-md' placeholder='first-name'/>
            <input type="text" className='col-12 col-md' placeholder='last-name'/>
            <input type="text" className='col-12 col-md' placeholder='email'/>
           </div>
           <div className='row'>
           <input type="text" className='col-12 col-md' placeholder='address'/>
           </div>
           <div className='row'>
            <input type="text" className='col-12 col-md' placeholder='profession'/>
            <input type="text" className='col-12 col-md' placeholder='age'/>
           </div>
           <div className='row'>
            <input type="text" className='col-12 col-md' placeholder='mobile-number'/>
            <input type="text" className='col-12 col-md' placeholder='skype'/>
           </div>
           <div className='row'>

           <input type="text" className='col-12 col-md btn-primary' placeholder='submit'/>
           </div>
         </form>
    </div>
  )
}

*/
