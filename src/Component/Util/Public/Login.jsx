
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  
  return (
    <>
    <div className='text-center bg-white-300 my-20 shadow-xl h-100 flex'>

    <div className='w-1/2 bg-slate-500-950 px-60'>
    <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"  className='h-80' alt="" />
    </div>



    <div className='w-1/3'>
    <h2 className='text-black text-6xl'>Login</h2>
    <form >
      <div className='my-10'>
        <label htmlFor="username" className='text-2xl'>Username:</label>
        <input type="text" id="username" className='h-10 w-96 rounded-tl-md rounded-br-lg px-2 bg-gray-200'/>
      </div>
      <div>
        <label htmlFor="password" className='text-2xl'>Password:</label>
        <input type="password" id="password" className='h-10 w-96 rounded-tl-md rounded-br-lg px-2 bg-gray-200'/>
      </div>
      <button className='bg-blue-700 rounded-tl-md rounded-br-lg p-1 w-20 my-5'>Login</button>
      
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