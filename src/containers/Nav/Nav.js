import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <h1>AARPlur</h1>
      <div className='nav-options'>
        <NavLink to='/' className='instructions-nav'> Instructions </NavLink>
        <NavLink to='/glitchHop'> Glitch Hop </NavLink>
        <NavLink to='/futureBass'> Future Bass </NavLink>
        <NavLink to='/deepHouse'> Deep House </NavLink>
        <NavLink to='/trap'> Trap </NavLink>
        <NavLink to='/favorites'> Favorites </NavLink>
      </div>
    </nav>
  )
}

export default Nav