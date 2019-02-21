const glitchHopReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_GLITCH_HOP':
      return action.artists
    default:
      return state
  }
}

export default glitchHopReducer