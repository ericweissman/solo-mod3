const futureBassReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ARTISTS_SUCCESS':
      return action.artists
    // case 'GET_FUTURE_BASS':
    //   return action.artists
    default:
      return state
  }
}

export default futureBassReducer