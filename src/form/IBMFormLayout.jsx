<<<<<<< HEAD
import React from "react";
import "../index.css";
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// CSS PART IS Using styled component
/////////////////////////////////////// METHOD 1
///////////// ACTUAL QUESTION ASKED IN IBM
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
=======
import React from 'react'
import '../index.css';
/////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////// CSS PART IS Using styled component
/////////////////////////////////////// METHOD 1
///////////// ACTUAL QUESTION ASKED IN IBM
import styled from 'styled-components';

export default function IBMFormLayout() {
  return (
       <Wrapper>
            <input type="text" className='first-name' placeholder='first-name'/>
            <input type="text" className='last-name' placeholder='last-name'/>
            <input type="text" className='email' placeholder='email'/>
            <input type="text" className='address' placeholder='address'/>
            <input type="text" className='profession' placeholder='profession'/>
            <input type="text" className='age' placeholder='age'/>
            <input type="text" className='mobile-number' placeholder='mobile-number'/>
            <input type="text" className='skype' placeholder='skype'/>
            <input type="text" className='submit' placeholder='submit'/>
        </Wrapper>
        )
>>>>>>> 24ce8aad758a0d1af6213fa034070452a28f2547
}

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

<<<<<<< HEAD
  .first-name {
    grid-column: span 2;
  }
  .last-name {
    grid-column: span 2;
  }
  .email {
    grid-column: span 2;
  }
  .address {
    grid-column: 1/-1;
  }
  .profession {
    grid-column: span 3;
  }
  .age {
    grid-column: span 3;
  }
  .mobile-number {
    grid-column: span 3;
  }
  .skype {
    grid-column: span 3;
  }

  .submit {
    grid-column: 1/-1;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

=======
  .first-name{
    grid-column: span 2;
  }
  .last-name{
    grid-column: span 2;
  }
  .email{
    grid-column: span 2;
  }
  .address{
    grid-column:1/-1;
  }
  .profession{
       grid-column: span 3;
  }
  .age{
       grid-column: span 3;
  }
  .mobile-number{
       grid-column: span 3;
  }
  .skype{
       grid-column: span 3;
  }

  .submit{
    grid-column: 1/-1;
  }

 @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
 }
`;



>>>>>>> 24ce8aad758a0d1af6213fa034070452a28f2547
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// METHOD 2
//////////// ADDING CONTAINER FOR FLEXBOX
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
<<<<<<< HEAD
=======


>>>>>>> 24ce8aad758a0d1af6213fa034070452a28f2547
