import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DepartmentListTable() {
  const departmentListFilter = useSelector(
    (state) => state.departmentListFilter
  );
  const { departmentsfiltered, loadingDepartment } = departmentListFilter;

  useEffect(() => {}, departmentsfiltered);
  return loadingDepartment ? (
    <p className='text-4xl mt-40 ml-40'>Loading...</p>
  ) : (
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
          {departmentsfiltered?.map((department) => {
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
                <td>
                  {department.manager.firstName +
                    ' ' +
                    department.manager.lastName}
                </td>
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
