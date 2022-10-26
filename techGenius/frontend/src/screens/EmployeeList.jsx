import React, { useEffect } from 'react';

import NavBar from '../components/NavBar';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isManager) {
    } else {
      navigate('/login');
    }
  }, [dispatch, userInfo]);
  return (
    <div>
      <NavBar />
      <div className='px-6 h-full flex gap-4'>
        <div className='border-2 border-fuchsia-700 w-1/6 h-96'>
          <p className='text-center'>Menu</p>
        </div>
        <div className='w-full'>
          <p className='font-bold text-3xl'>Employees</p>
          <div className='border-2 border-fuchsia-700 mt-5 w-full h-72 flex flex-col p-4 gap-4'>
            <p className='absolute top-40 left-45 bg-default px-2'>filters</p>
            <div className='flex gap-6 items-center justify-between'>
              <p>Status</p>
              <select className='select select-accent w-full max-w-xs '>
                <option selected disabled>
                  Active Only / (All) / Deactive Only
                </option>
                <option>Active Only</option>
                <option>(All)</option>
                <option>Deactive Only</option>
              </select>
            </div>
            <div className='flex gap-6 items-center justify-between'>
              <p>Department</p>
              <select className='select select-accent w-full max-w-xs justify-self-end'>
                <option selected disabled>
                  -select-
                </option>
                <option>(All)</option>
                <option>Deactive Only</option>
              </select>
            </div>
            <div className='flex gap-6 items-center justify-between'>
              <p>Manager</p>
              <select className='select select-accent w-full max-w-xs'>
                <option selected disabled>
                  -select-
                </option>
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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Telephone Number</th>
                  <th>Email Address</th>
                  <th>Manager</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Edit Deactive</th>
                  <th>Test Name</th>
                  <td>TestSurname</td>
                  <td>0821675514</td>
                  <td>test@test.com</td>
                  <td></td>
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

export default EmployeeList;
