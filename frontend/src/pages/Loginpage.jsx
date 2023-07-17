import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { PageContext } from '../context';
const Loginpage = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(PageContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    
    //IF login sucessessful
    setIsAuthenticated(true)
    console.log(isAuthenticated)
    if(isAuthenticated){
      navigate('/dashboard')
    }else{
      navigate('/')
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Loginpage