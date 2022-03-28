import React from 'react';
import { useState } from 'react';

function Signup() {

  const [fName, setfName] = useState('');
  const [flname, setlName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cellphone, setcellphone] = useState('');
  function handlesignup() {

    if (fName == "") {
      // print a message
      alert('Enter First Name')
    } else {

      var data = {
        'id': makeid(25),
        'fName': fName,
        'lName': flname,
        'dob': dob,
        'email': email,
        'password':password,
        'cellphone': cellphone
      }

      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('isLoggedIn', false)
      alert('User Signup Successfully')
    }


  }

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  return (

    <>
      <div className="Signup">
        <h6 style={{ textAlign: 'center' }}>SIGN UP</h6>


        <label >Enter Your Name</label>
        <input type="text" placeholder='FirstName'

          onChange={(e) => setfName(e.target.value)} value={fName} />
        <br></br>
        <label >Enter Your Last Name</label>
        <input type="text" placeholder='LastName'

          onChange={(e) => setlName(e.target.value)} value={flname} />
        <br></br>
        <label >Enter Your Date Of Birth</label>
        <input type="text" placeholder='DOB'
          onChange={(e) => setDob(e.target.value)} value={dob} />
        <br></br>

        <label >Enter Your Cellphone</label>
        <input type="phonenumber" placeholder='cellphone'
          onChange={(e) => setcellphone(e.target.value)} value={cellphone} />
        <br></br>
        <label >Enter Your Email</label>
        <input type="email" placeholder='Email'

          onChange={(e) => setEmail(e.target.value)} value={email} />
           <br></br>
        <label >Enter Your Password</label>
        <input type="password" placeholder='Password'

          onChange={(e) => setPassword(e.target.value)} value={password} />
        <br></br>
        <button onClick={handlesignup}>SignUp</button>
      </div>
      <div></div>
    </>
  )

}

export default Signup;