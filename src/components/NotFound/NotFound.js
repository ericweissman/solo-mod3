import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h4>Dagnabbit! This page doesn't exist!</h4>
      <Link to='/'>
        <button>Back To Safety</button>
      </Link>
    </div>
  )
}

export default NotFound