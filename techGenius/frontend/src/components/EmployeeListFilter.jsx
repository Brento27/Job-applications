import React from 'react';

function EmployeeListFilter() {
  return (
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
  );
}

export default EmployeeListFilter;
