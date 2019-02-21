const futureBassReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FUTURE_BASS':
      return action.artists
    default:
      return state
  }
}

export default futureBassReducer