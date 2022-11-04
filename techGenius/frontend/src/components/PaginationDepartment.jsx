import React from 'react';
import { useSelector } from 'react-redux';

function PaginationDepartment({ selectCurrentPage }) {
  const departmentListFilter = useSelector(
    (state) => state.departmentListFilter
  );
  const { pages } = departmentListFilter;

  let buttonArray = [];

  for (let index = 0; index < pages; index++) {
    buttonArray[index] = index + 1;
  }

  return pages > 1 ? (
    <div className='btn-group px-6 mb-6 '>
      {buttonArray.map((x) => (
        <button
          className='btn btn-primary'
          value={x}
          onClick={(e) => {
            selectCurrentPage(e.target.value);
          }}
        >
          {x}
        </button>
      ))}
    </div>
  ) : (
    <div className='my-32'></div>
  );
}

export default PaginationDepartment;
