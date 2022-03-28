import React from 'react'

import { useState } from 'react';

import { Route, Routes } from 'react-router-dom'
import Signup from './Signup';
function Gogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function login() {
    var user = localStorage.getItem('user')
    if (user == null) {
      alert('No User Exists')
    } else {
      //  alert('User Found')
      var jsonUser = JSON.parse(user)

      if (jsonUser.email == email && jsonUser.password == password) {
        alert('User Found')
        // IsLoggedIn = True
          localStorage.setItem('isLoggedIn',true)
        // Go to Main Screen
          
  window.open("./main");
      } else {
        alert('Invalid User')
      }
    }
  }



  return (
    <>
      <div className='Login'>
        <h6>LOGIN PAGE</h6>
        <label>
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </label>
        <div>
          <button onClick={login}>Login</button>

          <button onClick={() => {

  window.open("./signup");
          }}>Sign up</button>
        </div>
      </div>

    </>
  )


}


export default Gogin;