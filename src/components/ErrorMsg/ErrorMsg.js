import React from 'react'
import PropTypes from 'prop-types';

const ErrorMsg = (props) => {
  return (
    <div className='error'>
      <h4>Dadgummit!</h4>
      <p>Looks like the computer is on the fritz. Says here it's because:</p> 
      <p className='error-message'>{props.message}!</p>
    </div>
  )
}

export default ErrorMsg

ErrorMsg.propTypes = {
  message: PropTypes.string
}

ErrorMsg.defaultProps = {
  message: ''
}

