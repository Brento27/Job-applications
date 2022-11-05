import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  listDepartments,
  listDepartmentsfilter,
} from '../actions/departmentActions';
import DepartmentListFilter from '../components/DepartmentListFilter';
import NavBar from '../components/NavBar';

function DepartmentList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isManager) {
      dispatch(listDepartments());
      dispatch(listDepartmentsfilter());
    } else {
      navigate('/login');
    }
  }, [dispatch, userInfo]);
  return (
    <div>
      <NavBar />

      <div className='w-full h-full bg-gray-300'>
        <DepartmentListFilter />
      </div>
    </div>
  );
}

export default DepartmentList;
