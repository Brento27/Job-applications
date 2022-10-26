import React from 'react';

function PerPageAndSearch() {
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
      <div className='flex items-center'>
        <input
          type='text'
          placeholder='Search'
          className='input input-bordered input-accent'
        />
      </div>
    </div>
  );
}

export default PerPageAndSearch;
