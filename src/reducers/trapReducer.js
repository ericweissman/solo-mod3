const trapReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.artists
    // case 'GET_TRAP':
    //   return action.artists
    default:
      return state
  }
}

export default trapReducer