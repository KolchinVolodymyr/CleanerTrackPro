import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/client">Client</Link></li>
                    <li><Link to="/employees">Employees</Link></li>
                    <li><Link to="/equipment">Equipment</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/worksites">Worksites</Link></li>
                </ul>
            </div>
        </nav>
    )
}