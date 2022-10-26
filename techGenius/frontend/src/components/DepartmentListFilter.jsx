import React from 'react';

function DepartmentListFilter() {
  return (
    <div className='border-2 border-fuchsia-700 mt-5 w-full flex flex-col p-4 gap-4'>
      <p className='absolute top-40 left-45 bg-default px-2'>filters</p>
      <div className='flex gap-6 items-center justify-between'>
        <p>Status</p>
        <select className='select select-accent w-full max-w-xs '>
          <option selected>Active Only</option>
          <option>(All)</option>
          <option>Deactive Only</option>
        </select>
      </div>
      <button className='btn btn-accent w-24'>Filter</button>
    </div>
  );
}

export default DepartmentListFilter;
