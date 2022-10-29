import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerDepartment } from '../actions/departmentActions';
import { listUsers } from '../actions/userActions';

function CreateDepartmentForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [manager, setManager] = useState({});

  const userList = useSelector((state) => state.userList);
  const { users, loading } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const saveHandler = (e) => {
    e.preventDefault();
    const managerName = manager.firstName + ' ' + manager.lastName;
    const managerId = manager._id;
    console.log(managerId);
    console.log(manager);
    dispatch(registerDepartment(name, managerId, managerName));
    navigate('/department/list');
  };
  const cancelHandler = () => {
    navigate('/department/list');
  };

  useEffect(() => {
    if (userInfo && userInfo.isManager) {
      dispatch(listUsers());
    } else {
      navigate('/login');
    }
  }, [dispatch, userInfo]);

  return loading ? (
    <p className='text-4xl mt-40 ml-40'>Loading...</p>
  ) : (
    <>
      <div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Name</p>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='input input-bordered input-accent w-80'
          />
        </div>
        <div className='flex mt-6 items-center justify-between'>
          <p className='text-2xl'>*Manager</p>
          <select
            className='select select-accent w-full max-w-xs justify-self-end'
            defaultValue={userInfo}
            onChange={(e) => {
              setManager(JSON.parse(e.target.value));
            }}
          >
            <option>~Select~</option>
            {users?.map((user) => {
              return (
                <option key={user._id} value={JSON.stringify(user)}>
                  {user.firstName + ' ' + user.lastName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className='flex justify-end my-4 gap-4'>
        <button className='btn btn-accent' onClick={saveHandler}>
          Save
        </button>
        <button className='btn btn-accent' onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default CreateDepartmentForm;
