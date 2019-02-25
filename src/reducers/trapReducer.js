const trapReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TRAP_SUCCESS':
      const artists = action.artists.map((artist) => {
        return {
          name: artist.Name,
          wiki: artist.wUrl,
          id: artist.yID,
          favorited: artist.favorited,
        }
      })
      return artists
    case 'ADD_TO_FAVORITES':
      return state.map((artist) => {
        if (artist.id === action.artist.id) {
          artist.favorited = !artist.favorited
        }
        return artist
      })
    case 'REMOVE_FROM_FAVORITES':
      return state.map((artist) => {
        if (artist.id === action.artist.id) {
          artist.favorited = !artist.favorited
        }
        return artist
      })
    default:
      return state
  }
}

export default trapReducer