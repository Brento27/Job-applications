import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DepartmentListTable() {
  const departmentList = useSelector((state) => state.departmentList);
  const { departments } = departmentList;

  useEffect(() => {}, departments);
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
          {departments?.map((department) => {
            return (
              <tr key={department._id}>
                <td>
                  <div className='flex gap-2'>
                    <Link to={`/department/edit/${department._id}`}>
                      <button className='btn btn-accent'>Edit</button>
                    </Link>
                  </div>
                </td>
                <td>{department.name}</td>
                <td>{department.managerName}</td>
                <td>{department.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentListTable;
