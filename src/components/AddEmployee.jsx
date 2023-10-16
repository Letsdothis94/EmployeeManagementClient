import React from 'react';
import { useState } from 'react';

const AddEmployee = ({ employees, setEmployees }) => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');

    const newEmploye = async (e) => {
        e.preventDefault();

        const data = {
            "fName": fName,
            "lName": lName,
            "email": email
        };

        try {
            const response = await fetch(`http://localhost:8080/api/v1/employees`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if(response.ok){
                alert('Successfully added to database');
                clearForm();
                setEmployees([...employees, data ]);
            } else {
                alert('Failed to add to database');
            }
        } catch(error){
            console.error('Error:', error);
            alert("An error occurred while adding to database");
        }
    };

    const clearForm = () => {
        setFName('');
        setLName('');
        setEmail('');
    };

  return (
    <div className='container-add'>
        <section className='add-section'>
            <div className='title-div-add'>
                <h2>Add Employee</h2>
            </div>
            <div className='div-form-container'>
                <form>
                    <label>First Name:</label><br/>
                    <input type='text' value={fName} onChange={(e) => {setFName(e.target.value)}}></input><br/>
                    <label>Last Name:</label><br/>
                    <input type='text' value={lName} onChange={(e) => { setLName(e.target.value) }}></input><br/>
                    <label>E-mail:</label><br/>
                    <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }}></input><br/>
                    <div>
                        <button className='save-btn' onClick={newEmploye}>Save</button>
                        <button className='dlt-btn'>Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default AddEmployee;