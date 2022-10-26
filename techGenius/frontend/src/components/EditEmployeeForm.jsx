import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUser,
  updateUserProfile,
  getUserDetails,
} from '../actions/userActions';

function EditEmployeeForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);

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

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, []);
  return (
    <>
      <div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Name</p>
          <input
            type='text'
            value={firstName}
            placeholder={userDetails.user.firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='input input-bordered input-accent w-80'
          />
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Surname</p>
          <input
            type='text'
            value={lastName}
            placeholder={userDetails.user.lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='input input-bordered input-accent w-80'
          />
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Telephone Number</p>
          <input
            type='text'
            placeholder={userDetails.user.telephoneNumber}
            value={telephoneNumber}
            onChange={(e) => setTelephoneNumber(e.target.value)}
            className='input input-bordered input-accent w-80'
          />
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-2xl'>*Email Address</p>
          <input
            type='text'
            placeholder={userDetails.user.email}
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
