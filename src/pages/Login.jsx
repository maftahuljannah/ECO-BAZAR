import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='max-w-[580px] w-full p-6 shadow-sm rounded border border-gray-200 mx-auto mt-20'>
      <h2 className='text-center text-3xl font-bold'>Login</h2>

    <form>
        <input type='email' className='border border-gray-300 w-full block mt-5 h-[50px] rounded pl-[8px]' placeholder='Email'/>
        <input type='password' className='border border-gray-300 w-full block mt-5 h-[50px] rounded pl-[8px]' placeholder='password'/>
       <button type='submit' className='btn w-full justify-center mt-5'>Login</button>

    <Link to='/register' className='text-center text-branding-success block text-sm mt-3'>
    Not register yet! Create a new Account 
    </Link> 

<div className='flex gap-4 items-center justify-center'>
    <button type='button'className='flex items-center justify-center gap-2 border border-gray-300 p-4 mt-5'>
        Login with google
        <img width={'30px'} src="/images/googleimage.png" alt="" />
       </button>

         <button type='button'className='flex items-center justify-center gap-2 border border-gray-300 p-4 mt-5'>
        Login with facebook
        <img width={'45px'} src="/images/Facebook-logo.png" alt="" />
       </button>
</div>

    </form>

    </div>
  )
}

export default Login
