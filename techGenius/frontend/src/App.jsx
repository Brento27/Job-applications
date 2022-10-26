import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEditDepartment from './screens/CreateEditDepartment';
import CreateEditEmployee from './screens/CreateEditEmployee';
import DepartmentList from './screens/DepartmentList';
import EmployeeList from './screens/EmployeeList';
import Login from './screens/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/employeelist' element={<EmployeeList />} />
          <Route path='/departmentlist' element={<DepartmentList />} />
          <Route
            path='/create-edit/employee'
            element={<CreateEditEmployee />}
          />
          <Route
            path='/create-edit/department'
            element={<CreateEditDepartment />}
          />
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
