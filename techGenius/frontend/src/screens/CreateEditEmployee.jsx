import React from 'react';
import NavBar from '../components/NavBar';

function CreateEditEmployee() {
  return (
    <div>
      <NavBar />
      <div className='px-6 h-full flex gap-4'>
        <div className='border-2 border-fuchsia-700 w-1/6 h-96'>
          <p className='text-center'>Menu</p>
        </div>
        <div className='w-full h-full'>
          <p className='font-bold text-3xl'>Create / Edit Employee</p>
          <div className='border-2 border-fuchsia-700 mt-2 w-10/12 h-64'></div>
        </div>
      </div>
    </div>
  );
}

export default CreateEditEmployee;
