import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerDepartment } from '../actions/departmentActions';
import { updateUser } from '../actions/userActions';
import { BiSave } from 'react-icons/bi';
import { TiCancel } from 'react-icons/ti';

function CreateDepartmentForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [manager, setManager] = useState({});
  const [btnDisabled, setBtnDisabled] = useState('btn-disabled');
  const [messageName, setMessageName] = useState(null);

  const userList = useSelector((state) => state.userList);
  const { users, loading } = userList;
  const departmentRegister = useSelector((state) => state.departmentRegister);
  const { departmentInfo } = departmentRegister;

  const saveHandler = (e) => {
    e.preventDefault();
    dispatch(registerDepartment(name, manager));
    dispatch(
      updateUser({
        _id: manager._id,
        isManager: true,
        department: departmentInfo,
      })
    );
    navigate('/department/list');
  };
  const cancelHandler = () => {
    navigate('/department/list');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (name === '') {
      setBtnDisabled('btn-disabled');
      setMessageName(null);
    } else if (name.trim().length <= 3) {
      setBtnDisabled('btn-disabled');

      setMessageName('Not a valid name, must be atleast 3 characters');
    } else {
      setBtnDisabled('');
      setMessageName(null);
    }
  };
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
            onChange={handleNameChange}
            className='input input-bordered input-primary w-80'
          />
        </div>
        <div className='flex mt-6 items-center justify-between'>
          <p className='text-2xl'>*Manager</p>
          <select
            className='select select-primary w-full max-w-xs justify-self-end'
            defaultValue={manager}
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
        <button
          className={`btn btn-success ${btnDisabled} gap-2`}
          onClick={saveHandler}
        >
          <BiSave size={25} /> Save
        </button>
        <button className='btn btn-error gap-2' onClick={cancelHandler}>
          <TiCancel size={25} /> Cancel
        </button>
      </div>
    </>
  );
}

export default CreateDepartmentForm;
