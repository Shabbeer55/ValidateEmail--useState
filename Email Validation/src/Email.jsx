import React from 'react'
import { useState } from 'react'

const Email = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const UpdateMail =(e)=> {
      setEmail(e.target.value);
    };

    const ValidatEmail = (e)=> {

      var emailformat= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

              if (!emailformat.test(email))  {
                setError("Invalid email format. '@' and '.com' should be included")
              }
             
              else{
                setError("Your email id is verifyed")
              }
        
    }     
  return (
    <>
      <label htmlFor="EmailValdation">Email Validation:</label>
      <input type="email" 
       name='email' 
       value={email} 
       onChange={UpdateMail}/>
        <span>{error}</span><br/>
      <button onClick={ValidatEmail}>Validate Email</button>
      </>
  )
}

export default Email