import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function CreateEmployeeForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const saveHandler = (e) => {
    e.preventDefault();
    dispatch(register(firstName, lastName, telephoneNumber, email));
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

export default CreateEmployeeForm;