const futureBassReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ARTISTS_SUCCESS':
      const artists = action.artists.Similar.Results.map((artist) => {
        return {
          name: artist.Name,
          wiki: artist.wUrl,
          video: artist.yID
        }
      })
      return artists
    // case 'GET_FUTURE_BASS':
    //   return action.artists
    default:
      return state
  }
}

export default futureBassReducer