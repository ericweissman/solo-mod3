const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES':
      action.artist.favorited = !action.artist.favorited
      if(!state.includes(action.artist)) {
        return [...state, action.artist]
      }
    case 'REMOVE_FROM_FAVORITES':
      action.artist.favorited = !action.artist.favorited
      const deleted = state.filter(artist => artist.id !== action.artist.id)
      return deleted
    case 'POPULATE_FAVORITES':
      return action.artists
    default:
      return state
  }
}

export default favoritesReducer