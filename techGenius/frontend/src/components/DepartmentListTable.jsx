import React from 'react';

function DepartmentListTable() {
  return (
    <div className='overflow-x-auto mt-4'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Manager</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Edit Deactive</th>
            <th>Test Dept</th>
            <td>TestSurname</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentListTable;
