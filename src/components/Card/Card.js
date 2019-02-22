import React from 'react'
import YouTube from 'react-youtube';

const Card = ({name, video, wiki}) => {
  return(
    <div>
      <h4>{name}</h4>
      <p>{video}</p>
      <YouTube 
        videoId={video}
        title={name}
      />
      <a href=`${wiki}`>
    </div>
  )
}

export default Card