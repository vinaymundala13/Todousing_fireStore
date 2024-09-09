import React, { useState } from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';
import { auth } from 'firebase/auth';

const LoginForm = () => {
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
        await signInWithEmailAndPassword(auth,email,password);
        console.log("Logged in successfully");
        setEmail('')
        setPassword('')
        setError(null)
    }catch(error){
        setError(error.message)
        console.log("Error Logging in",error);
    }
  };

  return (
    <div className='container'>
      <h2 className='Heading'>Login</h2>
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
          <button type='submit' >Login</button>

        </div>
       
      </form>
    </div>
  );
};

export default LoginForm;
