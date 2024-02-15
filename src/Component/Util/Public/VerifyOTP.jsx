import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const VerifyOTP = () => {

  const [username,setUsername]=useState("")
  const [otp,setOtp]= useState("")
  const [timer,setTimer]=useState(60)

 const navigate = useNavigate();



 useEffect(() => {
  const interval = setInterval(() => {
    setTimer();
  }, 1000);

  return () => clearInterval(interval);
}, []);
    

const handleRegistration= async (event)=>{
  event.preventDefault();
  console.log(username)
  console.log(otp)
  

try{
  const response =await axios.post("http://localhost:8080/api/v1/verify-otp",
  {
    email:sessionStorage.getItem("email"),
    otp: otp
    
  },
  {
    headers:{
      "Content-Type":"application/json"
    },
    withCredentials: true
    
  }
  );
  sessionStorage.removeItem("email")
  navigate("/login");
}

catch(error){
  console.log(error)
}


}

  return (
    <div className='text-center text-2xl'>
        <h1 className='my-10'>Please enter your OTP</h1>
        <div>




       
        <div>
        <label className='text-2xl'>Enter your otp</label>

        <input type="tel"  id="num" onChange={(event)=>setOtp(event.target.value)} className='h-10 w-96 rounded-tl-md rounded-br-lg px-2 bg-gray-200'/><br />
        </div>
          <button className='m-5 w-20 bg-blue-600 rounded-tl-md rounded-br-lg p-1' onClick={handleRegistration}>Verify
          </button>
        </div>

        <div>
        Time Remaining: {timer} seconds
      </div>

    </div>
  )
}

export default VerifyOTP