import '../css/navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu navbar">
      <Link to='/' className="active item">Dashboard</Link>
      <Link to='/students' className=" item">Students</Link>
    </div>
  )
}

export default Navbar
