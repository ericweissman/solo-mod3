import React from 'react'

const Card = ({name, video, wiki}) => {
  return(
    <div>
      <h4>{name}</h4>
      <p>{video}</p>
      <p>{wiki}</p>
    </div>
  )
}

export default Card