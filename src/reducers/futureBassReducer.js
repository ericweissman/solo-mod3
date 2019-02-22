const futureBassReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FUTURE_BASS_SUCCESS':
      const artists = action.artists.Similar.Results.map((artist) => {
        return {
          name: artist.Name,
          wiki: artist.wUrl,
          id: artist.yID,
          favorited: false,
        }
      })
      return artists
    default:
      return state
  }
}

export default futureBassReducer