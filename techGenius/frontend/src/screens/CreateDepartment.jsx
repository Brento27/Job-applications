import React from 'react';
import CreateDepartmentForm from '../components/CreateDepartmentForm';
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
          <CreateDepartmentForm />
        </div>
      </div>
    </div>
  );
}

export default CreateDepartment;
