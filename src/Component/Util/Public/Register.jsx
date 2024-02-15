import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ role }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(role);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/register",
        {
          email: username,
          password: password,
          userRole: role
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );
      sessionStorage.setItem("email",username);
      navigate("/verify-otp");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className='text-black text-6xl text-center my-10'>Register</h2>

      <div className='text-center bg-white-300 my-20 shadow-xl h-100 flex justify-center'>

        <div className='text-xl text-center'>
          <img src="https://t3.ftcdn.net/jpg/05/93/83/84/360_F_593838411_YupnLVqwDhhJEeT7VDtGwrVZ1CYSwvyY.jpg" className='' alt="" />
        </div>

        <div className='text-xl text-center w-1/2 py-7'>
          <form method='post' required>
            <div className='my-10'>
              <label htmlFor="email" className='text-2xl'>Enter your email:</label>
              <input type="email" onChange={(event) => setUsername(event.target.value)} id="username" className='h-10 w-96 rounded-tl-md rounded-br-lg bg-gray-200 px-2' />
            </div>
            <div>
              <label htmlFor="password" className='text-2xl'>Enter your Password:</label>
              <input type="password" onChange={(event) => setPassword(event.target.value)} id="password" className='h-10 w-96 rounded-tl-md rounded-br-lg  bg-gray-200 px-2' />
            </div>
            <button type='submit' className='w-30 h-8 bg-blue-800 my-8  rounded-tl-md rounded-br-lg' onClick={handleRegistration}>Register</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Register;
