import React from 'react';

function Login() {
  return (
    <div className='border-2 border-fuchsia-700 m-8'>
      <p className='absolute top-5 left-12 bg-default px-2'>Login</p>
      <div className='flex items-center h-screen flex-col'>
        <p className='text-4xl my-12 mt-16 font-bold'>Login</p>
        <div className='form-control w-full max-w-2xl mb-6'>
          <label className='label'>
            <span className='label-text'>Username</span>
          </label>
          <input
            type='text'
            placeholder='Type Username Here'
            className='input input-bordered input-accent w-full max-w-2xl'
          />
        </div>
        <div className='form-control w-full max-w-2xl mt-6 mb-12'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='Type Password Here'
            className='input input-bordered input-accent w-full max-w-2xl'
          />
        </div>
        <button className='btn btn-accent px-36'>Login</button>
      </div>
    </div>
  );
}

export default Login;
