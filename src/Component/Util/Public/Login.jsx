
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(username)
    console.log(password)
    try {
      const response = await axios.post('http://localhost:8080/api/v1/login', 
      {
        email: username,
        password: password,
        
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
      );
      
      if (response.status === 200) {
        // Login successful
      
        navigate('/');
      } else {
        // Handle other status codes like 401, 403, etc.
        setError('Invalid username or password');
      }
    } catch (error) {
      // Handle network errors, server errors, etc.
      setError('An error occurred. Please try again later.');
    }
  };
  


  return (
    <>
    <div className='text-center bg-white-300 my-20 shadow-xl h-100 flex'>

    <div className='w-1/2 bg-slate-500-950 px-60'>
    <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"  className='h-80' alt="" />
    </div>



    <div className='w-1/3'>
    <h2 className='text-black text-6xl'>Login</h2>
    <form >
      <div className='my-6'>
        <label htmlFor="email" className='text-2xl '>Enter your email:</label>
        <input type="email" id="username" className='h-10 w-96 rounded-tl-md rounded-br-lg px-2 bg-gray-200 m-3'  onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password" className='text-2xl'> Enter your Password:</label>
        <input type="password" id="password" className='h-10 w-96 rounded-tl-md rounded-br-lg px-2 bg-gray-200 m-3'  onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type='submit' className='bg-blue-700 rounded-tl-md rounded-br-lg p-1 w-20 my-5' onClick={handleLogin}>Login</button>
      
      <div className='space-x-16 my-8'>
      <Link to="/customer/register" className='text-blue-950 text-xl'>New to shopping cart? craete an account</Link>
      </div>
    </form>
  </div>

  </div>
  </>
  
  )
}

export default Login


{/* <button type="submit" className='text-black bg-blue-400 my-6 w-32 h-9 rounded-tl-md rounded-br-lg'>Login</button> */}