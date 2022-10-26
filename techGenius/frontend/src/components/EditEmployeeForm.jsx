import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  register,
  updateUser,
  updateUserProfile,
} from '../actions/userActions';

function EditEmployeeForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { userId } = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');

  const saveHandler = (e) => {
    e.preventDefault();
    if (userInfo.isManager) {
      dispatch(
        updateUser({
          _id: userId,
          firstName,
          lastName,
          telephoneNumber,
          email,
          status,
        })
      );
    } else if (userInfo) {
      dispatch(updateUserProfile());
    }
  };
  const cancelHandler = () => {
    navigate('/employee/list');
  };

  return (
    <>
      <div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Name</p>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='input input-bordered input-accent w-80'
          />
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Surname</p>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='input input-bordered input-accent w-80'
          />
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Telephone Number</p>
          <input
            type='text'
            placeholder='eg. 0821111111'
            value={telephoneNumber}
            onChange={(e) => setTelephoneNumber(e.target.value)}
            className='input input-bordered input-accent w-80'
          />
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Email Address</p>
          <input
            type='text'
            placeholder='eg. test@test.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input input-bordered input-accent w-80'
          />
        </div>
        <div className='flex mt-6 items-center justify-between'>
          <p className='text-2xl'>*Manager</p>
          <select className='select select-accent w-80'>
            <option selected disabled>
              -select-
            </option>
            <option>(All)</option>
            <option>Deactive Only</option>
          </select>
        </div>
        <div className='flex mt-6 items-center justify-between'>
          <p className='text-2xl'>*Status</p>
          <select
            className='select select-accent w-80'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option selected disabled>
              -select- / Active / Deactive
            </option>
            <option>active</option>
            <option>deactive</option>
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

export default EditEmployeeForm;
