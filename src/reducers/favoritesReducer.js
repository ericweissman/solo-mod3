const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.artist]
    case 'REMOVE_FROM_FAVORITES':
      const deleted = state.filter(artist => artist.id !== action.id)
      return deleted
    case 'POPULATE_FAVORITES':
      return action.artists
    default:
      return state
  }
}

export default favoritesReducer