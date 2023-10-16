import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import EmployeesList from './components/EmployeesList'
import Footer from './components/Footer'
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [update, setUpdate] = useState({
    id: 0,
    fName: '',
    lName: '',
    email: ''
  });

  const fetchEmployees = async () => {
    const req = await fetch(`http://localhost:8080/api/v1/employees`);
    const res = await req.json();
    setEmployees(res);
  }

  useEffect(() => {
    fetchEmployees();
  }, [setEmployees]);
  console.log(employees);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/addEmployee'} element={<AddEmployee employees={employees} setEmployees={setEmployees} />} />
        <Route path={'/updateEmployee'} element={<UpdateEmployee employees={employees} setEmployees={setEmployees} update={update} />} />
        <Route path={'/'} element={<EmployeesList employees={employees} setEmployees={setEmployees} setUpdate={setUpdate} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
