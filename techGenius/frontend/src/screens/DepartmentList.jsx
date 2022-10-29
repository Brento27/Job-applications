import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listDepartments } from '../actions/departmentActions';

import DepartmentListFilter from '../components/DepartmentListFilter';
import DepartmentListTable from '../components/DepartmentListTable';
import Menu from '../components/Menu';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import PerPageAndSearch from '../components/PerPageAndSearch';

function DepartmentList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div>
      <NavBar />
      <div className='px-6 h-full flex gap-4'>
        <Menu />
        <div className='w-full h-full'>
          <p className='font-bold text-3xl'>Departments</p>
          <DepartmentListFilter />
          <PerPageAndSearch />
          <DepartmentListTable />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default DepartmentList;
