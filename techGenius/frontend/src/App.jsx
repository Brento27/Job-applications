import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './screens/EmployeeList';
import Login from './screens/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/employeelist' element={<EmployeeList />} />
          <Route path='/' element={<EmployeeList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
