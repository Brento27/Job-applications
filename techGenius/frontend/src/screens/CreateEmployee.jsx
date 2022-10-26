import React from 'react';
import CreateEmployeeForm from '../components/CreateEmployeeForm';
import Menu from '../components/Menu';
import NavBar from '../components/NavBar';

function CreateEmployee() {
  return (
    <div>
      <NavBar />
      <div className='px-6 h-full flex gap-4'>
        <Menu />
        <div className='w-full h-full'>
          <p className='font-bold text-3xl'>Create / Edit Employee</p>
          <CreateEmployeeForm />
        </div>
      </div>
    </div>
  );
}

export default CreateEmployee;
