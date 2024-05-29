import './style.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Expense Tracker</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            <i className="fas fa-home"></i>
            <span> Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            <i className=""></i>
            <span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/deposit">
            <i className="fas fa-dollar-sign"></i>
            <span> Deposit</span>
          </NavLink>
        </li>
        <li>
          <a href="/contact">
            <i className="fa fa-comment"></i>
            <span> Contact </span>
          </a>
        </li>
        <li>
          <a href="/about">
            <i className="fa fa-id-badge"></i>
            <span> About </span>
          </a>
        </li>
      </ul>
      <div className="buttons">
      {localStorage.getItem('auth-token')
    ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}} >Logout</button>
    :<Link to='/login'> <button>Login</button></Link>}
      </div>
    </nav>
  );
}

export default Navbar;
