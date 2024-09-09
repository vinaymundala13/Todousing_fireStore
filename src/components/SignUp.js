import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from 'firebase'

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth,email,password);
      console.log("Signed up Successfully");
      setEmail('')
      setPassword('')
      setError(null);
    }catch(error){
      setError(error.message)
      console.log("Error signing up",error);
    }
  };

  return (
    <div className='container'>
      <h2 className='Heading'>SignUp</h2>
      {error && <div className='error'>{error}</div>}
      <form onSubmit={handleSubmit} className='formcontainer'>
        <div className='inputlabel'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='inputlabel'> 
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className='btn'>
          <button type='submit' className='b' >SignUp</button>

        </div>
       
      </form>
    </div>
  );
};

export default SignUpForm;
