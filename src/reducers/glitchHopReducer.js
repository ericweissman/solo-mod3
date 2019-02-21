const glitchHopReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.artists
    // case 'GET_GLITCH_HOP':
    //   return action.artists
    default:
      return state
  }
}

export default glitchHopReducer