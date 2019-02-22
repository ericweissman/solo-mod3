import React from 'react'

const Error = (props) => {
  return (
    <div>
      <h4>Dadgummit!</h4>
      <p>Looks like the computer is on the fritz. Says here it's because: {props.message}!</p>
    </div>
  )
}

export default Error