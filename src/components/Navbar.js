import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="ui secondary pointing menu navbar">
        <Link to='/' className="active item">Dashboard</Link>
        <Link to='/students' className=" item">Students</Link>
        <Link to='/rooms' className=" item">Rooms</Link>
      </div>
    </div>
  )
}

export default Navbar;
