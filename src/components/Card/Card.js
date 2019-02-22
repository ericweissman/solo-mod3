import React from 'react'
import YouTube from 'react-youtube';

const Card = ({ name, video, wiki }) => {
  return (
    <div>
      <h4>{name}</h4>
      <YouTube
        videoId={video}
        title={name}
      />
      <a href={wiki} target='blank'>More Info</a>
    </div>
  )
}

export default Card