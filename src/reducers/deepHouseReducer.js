const deepHouseReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DEEP_HOUSE':
      return action.artists
    default:
      return state
  }
}

export default deepHouseReducer