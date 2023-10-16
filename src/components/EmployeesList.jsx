import React from 'react';
import { Link } from 'react-router-dom';

const EmployeesList = ({ employees, setEmployees, setUpdate }) => {

    const deleteEmployee = async (id) => {
        let msge = 'Would you like to delete this employee?';
        if(confirm(msge) === true){
            try {
                const response = await fetch(`http://localhost:8080/api/v1/employees/${id}`, {
                    method: 'DELETE'
                });
                if(response.ok){
                    alert('Employee deleted successfully');
                    setEmployees([...employees.filter((employee) => {return employee.id !== id})]);
                } else {
                    alert('An error occurred');
                }
            } catch (error) {
                console.error('Error: ' + error.message);
            }
        } else {
            alert('You have cancelled this action');
        }
    }

    const getId = (id, fName, lName, email) => {
        setUpdate({
            id: id,
            fName: fName,
            lName: lName,
            email: email
        });
    }
    
  return (
      <div className='div-list-container'>
        <div className='list-title'>
            <h2>Employees List</h2>
        </div>
        <div className='list-table-container'>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((x) => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.firstName}</td>
                                    <td>{x.lastName}</td>
                                    <td>{x.email}</td>
                                    <td className='table-btns'>
                                        <button className='update-btn' onClick={() => {getId(x.id, x.firstName, x.lastName, x.email)}}><Link to='/updateEmployee' className='link-style'>Update</Link></button>
                                        <button className='delete-btn' onClick={() => {deleteEmployee(x.id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default EmployeesList