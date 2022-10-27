import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  listDepartments,
  updatedepartment,
} from '../actions/departmentActions';

function DepartmentListTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const departmentList = useSelector((state) => state.departmentList);
  const { departments } = departmentList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isManager) {
      dispatch(listDepartments());
    } else {
      navigate('/login');
    }
  }, [dispatch, userInfo]);
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
              <tr>
                <td>
                  <div className='flex gap-2'>
                    <Link to={`/department/edit/${department._id}`}>
                      <button className='btn btn-accent'>Edit</button>
                    </Link>
                  </div>
                </td>
                <td>{department.name}</td>
                <td>{department.manager}</td>
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
