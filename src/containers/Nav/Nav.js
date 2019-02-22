import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <h1>AARPlurnt</h1>
      <NavLink to='/'> Instructions </NavLink>
      <NavLink to='/glitchHop'> Glitch Hop </NavLink>
      <NavLink to='/futureBass'> Future Bass </NavLink>
      <NavLink to='/deepHouse'> Deep House </NavLink>
      <NavLink to='/trap'> Trap </NavLink>
      <NavLink to='/favorites'> Favorites </NavLink>
    </nav>
  )
}

export default Nav