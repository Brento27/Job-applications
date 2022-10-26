import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

function NavBar() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className='p-6'>
        <div className='navbar bg-base-100 border-2 border-fuchsia-700'>
          <div className='navbar-start'>
            {userInfo.isManager ? (
              <>
                <div className='dropdown'>
                  <label tabIndex={0} className='btn btn-ghost btn-circle'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h7'
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                  >
                    <li>
                      <Link to='/employeelist'>Employee List</Link>
                    </li>
                    <li>
                      <Link to='/departmentlist'>Department List</Link>
                    </li>
                  </ul>
                </div>
                <Link to='/' className='btn btn-ghost normal-case text-xl'>
                  HR Administration System
                </Link>
              </>
            ) : (
              <Link to='/' className='btn btn-ghost normal-case text-xl'>
                HR Administration System
              </Link>
            )}
          </div>
          <div className='navbar-end'>
            <button className='btn btn-accent' onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
