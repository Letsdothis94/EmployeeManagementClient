import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav>
            <div className='title-div'>
                Employee Management App
            </div>
            <div className='ul-div'>
                <ul>
                    <Link to='/' className='link-style'>
                        <li>Employees</li>
                    </Link>
                    <Link to='/addEmployee' className='link-style'>
                        <li>Add Employee</li>
                    </Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header;