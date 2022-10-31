import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterListUsers } from '../actions/userActions';

function EmployeeListFilter() {
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState({});
  const [managerFilter, setManagerFilter] = useState({});

  const departmentList = useSelector((state) => state.departmentList);
  const { departments } = departmentList;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const userFilterList = useSelector((state) => state.userFilterList);
  const { usersFiltered } = userFilterList;

  const filterTable = () => {
    dispatch(
      filterListUsers(activeFilter, departmentFilter._id, managerFilter._id)
    );
  };

  useEffect(() => {}, [users]);

  return (
    <div className='border-2 border-fuchsia-700 mt-5 w-full h-72 flex flex-col p-4 gap-4'>
      <p className='absolute top-40 left-45 bg-default px-2'>filters</p>
      <div className='flex gap-6 items-center justify-between'>
        <p>Status</p>
        <select
          className='select select-accent w-80'
          onChange={(e) => {
            setActiveFilter(e.target.value);
          }}
        >
          <option value=''>All</option>
          <option value='active'>Active</option>
          <option value='deactive'>Deactive</option>
        </select>
      </div>
      <div className='flex gap-6 items-center justify-between'>
        <p>Departments</p>
        <select
          className='select select-accent w-80'
          onChange={(e) => {
            setDepartmentFilter(JSON.parse(e.target.value));
          }}
        >
          <option value=''>All</option>
          {departments?.map((department) => {
            return (
              <option key={department._id} value={JSON.stringify(department)}>
                {department.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className='flex gap-6 items-center justify-between'>
        <p>Manager</p>
        <select
          onChange={(e) => {
            setManagerFilter(JSON.parse(e.target.value));
          }}
          className='select select-accent w-full max-w-xs'
        >
          <option value=''>All</option>
          {users
            ?.filter((user) => user.isManager === true)
            .map((user) => {
              return (
                <option key={user._id} value={JSON.stringify(user)}>
                  {user.firstName + ' ' + user.lastName}
                </option>
              );
            })}
        </select>
      </div>
      <button className='btn btn-accent w-24' onClick={filterTable}>
        Filter
      </button>
    </div>
  );
}

export default EmployeeListFilter;
