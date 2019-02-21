const glitchHopReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_GLITCH_HOP_SUCCESS':
      const artists = action.artists.Similar.Results.map((artist) => {
        return {
          name: artist.Name,
          wiki: artist.wUrl,
          video: artist.yID
        }
      })
      return artists
    default:
      return state
  }
}

export default glitchHopReducer