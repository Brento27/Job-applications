import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterListUsers } from '../actions/userActions';

function PerPageAndSearchDepartment() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const searchHandler = () => {
    console.log(search);
    dispatch(filterListUsers('', '', '', search));
    setSearch('');
  };
  return (
    <div className='flex justify-between mt-4'>
      <div className='flex gap-6 items-center'>
        <p>Show per Page</p>
        <select className='select select-accent'>
          <option selected disabled>
            10 / 20 / 50 / 100 / All
          </option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
          <option>(All)</option>
        </select>
      </div>
      <div className='form-control'>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Search name…'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='input input-bordered input-accent'
          />
          <button
            className='btn btn-square border-1 border-accent'
            onClick={searchHandler}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PerPageAndSearchDepartment;
