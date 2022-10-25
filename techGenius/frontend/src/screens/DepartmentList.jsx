import React from 'react';
import NavBar from '../components/NavBar';

function DepartmentList() {
  return (
    <div>
      <NavBar />
      <div className='px-6 h-full flex gap-4'>
        <div className='border-2 border-fuchsia-700 w-1/6 h-96'>
          <p className='text-center'>Menu</p>
        </div>
        <div className='w-full h-full'>
          <p className='font-bold text-3xl'>Departments</p>
          <div className='border-2 border-fuchsia-700 mt-5 w-10/12 flex flex-col p-4 gap-4'>
            <p className='absolute top-40 left-45 bg-default px-2'>filters</p>
            <div className='flex gap-6 items-center justify-between'>
              <p>Status</p>
              <select className='select select-accent w-full max-w-xs '>
                <option selected>Active Only</option>
                <option>(All)</option>
                <option>Deactive Only</option>
              </select>
            </div>
            <button className='btn btn-accent w-24'>Filter</button>
          </div>
          <div className='flex justify-between mt-4'>
            <div className='flex gap-6 items-center'>
              <p>Show per Page</p>
              <select className='select select-accent'>
                <option selected disabled>
                  10 / 20 / 50 / 100 / all
                </option>
                <option>(All)</option>
                <option>Deactive Only</option>
              </select>
            </div>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Search'
                className='input input-bordered input-accent'
              />
            </div>
          </div>
          <div className='overflow-x-auto mt-4'>
            <table className='table w-full'>
              <thead>
                <tr>
                  <th>Actions</th>
                  <th>Name</th>
                  <th>Manager</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Edit Deactive</th>
                  <th>Test Dept</th>
                  <td>TestSurname</td>
                  <td>Active</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='btn-group mb-16'>
            <button className='btn btn-xs'>1</button>
            <button className='btn btn-xs btn-active'>2</button>
            <button className='btn btn-xs'>3</button>
            <button className='btn btn-xs'>4</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentList;
