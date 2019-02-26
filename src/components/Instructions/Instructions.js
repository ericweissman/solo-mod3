import React from 'react'

const Instructions = () => {
  return (
    <div className='instructions'>
      <h3>Welcome to AARPlur</h3>
      <p>Your one stop shop to learn about all the music that the young whippersnappers are boogying to!</p>
      <div className='instructions-area'>
        <div>
          <h5>Selecting Genres</h5>
          <p>Select one of the music genres using the left-side menu</p>
        </div>
        <div>
          <h5>Listening to Music</h5>
          <p>If you click on the image on the card, it will play you a popular song from the artist. Make sure you have your volume turned on your computer!</p>
        </div>
        <div>
          <h5>Getting More Info</h5>
          <p>Click on the More Info button to visit their online encyclopedia page</p>
        </div>
        <div>
          <h5>Adding Favorites</h5>
          <p>Click on the Add Favorites button on a card to save it to your Favorites! You can see your saved tracks when you click on Favorites.</p>
        </div>
      </div>
    </div>
  )
}

export default Instructions