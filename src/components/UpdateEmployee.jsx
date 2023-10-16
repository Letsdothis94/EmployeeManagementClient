import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateEmployee = ({ update, setEmployees, employees }) => {
    const [fName, setFName] = useState(update.fName);
    const [lName, setLName] = useState(update.lName);
    const [email, setEmail] = useState(update.email);
    console.log(update);
    const navigate = useNavigate();

    const UpdateEmploye = async (e) => {
        e.preventDefault();

        const data = {
            "id": update.id,
            "fName": fName,
            "lName": lName,
            "email": email
        };

        try {
            const response = await fetch(`http://localhost:8080/api/v1/employees`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                alert('Data updated successfully');
                setEmployees((prev) => {
                    return prev.map(employee => {
                        if(employee.id === update.id) {
                            return data;
                        }
                        return employee;
                    })
                });
                navigate('/');
            } else {
                alert('Failed to update to database');
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while updating to database");
        }
    };

    return (
        <div className='container-add'>
            <section className='add-section'>
                <div className='title-div-add'>
                    <h2>Update Employee</h2>
                </div>
                <div className='div-form-container'>
                    <form>
                        <label>First Name:</label><br />
                        <input type='text' value={fName} onChange={(e) => { setFName(e.target.value) }}></input><br />
                        <label>Last Name:</label><br />
                        <input type='text' value={lName} onChange={(e) => { setLName(e.target.value) }}></input><br />
                        <label>E-mail:</label><br />
                        <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }}></input><br />
                        <div>
                            <button className='save-btn' onClick={UpdateEmploye}>Save</button>
                            <button className='dlt-btn'>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default UpdateEmployee;