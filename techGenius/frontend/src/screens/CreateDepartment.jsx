import React from 'react';
import Menu from '../components/Menu';
import NavBar from '../components/NavBar';

function CreateDepartment() {
  return (
    <div>
      <NavBar />
      <div className='px-6 h-full flex gap-4'>
        <Menu />
        <div className='w-full h-full'>
          <p className='font-bold text-3xl'>Create Departments</p>
          <div className='border-2 border-fuchsia-700 mt-2 w-10/12 h-64'></div>
        </div>
      </div>
    </div>
  );
}

export default CreateDepartment;
