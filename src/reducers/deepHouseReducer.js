const deepHouseReducer = (state = [], action) => {
  switch (action.type) {
    // case 'GET_DEEP_HOUSE':
    //   return action.artists
    case 'FETCH_ARTISTS_SUCCESS':
      const artists = action.artists.Similar.Results.map((artist) => {
        return {
          name: artist.Name,
          wiki: artist.wUrl,
          video: artist.yID
        }
      })
      return artists
    default:
      return state
  }
}

export default deepHouseReducer