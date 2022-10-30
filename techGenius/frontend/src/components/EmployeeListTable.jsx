import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function EmployeeListTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  const { users, loading } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isManager) {
    } else {
      navigate('/login');
    }
  }, [dispatch, userInfo, users]);

  // const submitHandler = (e) => {
  //   const user = e.target.value;
  //   console.log(user);
  //   if (user.status === 'active') {
  //     dispatch(
  //       updateUser({
  //         _id: user._id,
  //         status: 'deactive',
  //       })
  //     );
  //   } else {
  //     dispatch(
  //       updateUser({
  //         _id: user._id,
  //         status: 'active',
  //       })
  //     );
  //   }

  //   e.preventDefault();
  // };

  return loading ? (
    'Loading...'
  ) : (
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
            <tr key={user._id}>
              <td>
                <div className='flex gap-2'>
                  <Link to={`/employee/edit/${user._id}`}>
                    <button className='btn btn-accent'>Edit</button>
                  </Link>

                  {/* <button
                    className='btn btn-secondary'
                    value={user}
                    type='submit'
                    onSubmit={submitHandler}
                  >
                    {user.status === 'active' ? 'Deactive' : 'Active'}
                  </button> */}
                </div>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.telephoneNumber}</td>
              <td>{user.email}</td>
              {user.manager ? (
                <td>{user.manager.firstName + ' ' + user.manager.lastName}</td>
              ) : (
                <td></td>
              )}

              <td>{user.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeListTable;
