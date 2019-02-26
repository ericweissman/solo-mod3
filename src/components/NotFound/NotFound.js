import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <h4>Dagnabbit!</h4>
      <p>This page doesn't exist!</p>
      <Link to='/'>
        <button>Back To Safety</button>
      </Link>
    </div>
  )
}

export default NotFound