import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { listUsers } from '../actions/userActions';

function EmployeeListTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isManager) {
      dispatch(listUsers());
    } else {
      navigate('/login');
    }
  }, [dispatch, userInfo]);
  return (
    <table className='table w-full'>
      <thead>
        <tr>
          <th>Actions</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Telephone Number</th>
          <th>Email Address</th>
          <th>Manager</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <tr>
              <td>
                <Link to={`/employee/edit/${user._id}`}>
                  <button className='btn btn-accent'>Edit</button>
                </Link>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.telephoneNumber}</td>
              <td>{user.email}</td>
              <td>Manager</td>
              <td>{user.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeListTable;
