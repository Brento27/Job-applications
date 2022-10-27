import React from 'react';
import Menu from '../components/Menu';
import NavBar from '../components/NavBar';

function EditDepartment() {
  return (
    <div>
      <NavBar />
      <div className='px-6 h-full flex gap-4'>
        <Menu />
        <div className='w-full h-full'>
          <p className='font-bold text-3xl'>Edit Departments</p>
        </div>
      </div>
    </div>
  );
}

export default EditDepartment;
