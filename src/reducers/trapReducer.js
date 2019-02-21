const trapReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TRAP':
      return action.artists
    default:
      return state
  }
}

export default trapReducer