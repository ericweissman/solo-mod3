const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES':
      const found = state.find((artist) => {
        return artist.id === action.artist.id
      })
      if(!found) {
        return [...state, action.artist]
      } else {
        return state
      }
    case 'REMOVE_FROM_FAVORITES':
      const deleted = state.filter(artist => artist.id !== action.artist.id)
      return deleted
    case 'POPULATE_FAVORITES':
      return action.artists
    default:
      return state
  }
}

export default favoritesReducer