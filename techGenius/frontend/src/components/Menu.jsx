import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  const addEmployeeHandler = () => {
    navigate('/employee/create');
  };
  return (
    <div className='border-2 border-fuchsia-700 w-1/6 h-96'>
      <p className='text-center'>Menu</p>
      <div className='flex justify-around my-4'>
        <button
          className='btn btn-outline btn-accent p-1'
          onClick={addEmployeeHandler}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default Menu;
