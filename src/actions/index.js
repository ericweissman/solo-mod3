export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
})

export const fetchArtistsSuccess = (artists, genre) => ({
  type: 'FETCH_ARTISTS_SUCCESS',
  artists,
  genre
})

export const getDeepHouseSuccess = (artists) => ({
  type: 'GET_DEEP_HOUSE_SUCCESS',
  artists
})

export const getFutureBassSuccess = (artists) => ({
  type: 'GET_FUTURE_BASS_SUCCESS',
  artists
})

export const getGlitchHopSuccess = (artists) => ({
  type: 'GET_GLITCH_HOP_SUCCESS',
  artists
})

export const getTrapSuccess = (artists) => ({
  type: 'GET_TRAP_SUCCESS',
  artists
})

export const addToFavorites = (artist) => ({
  type: "ADD_TO_FAVORITES",
  artist
})

export const removeFromFavorites = (artist) => ({
  type: "REMOVE_FROM_FAVORITES",
  artist
})

export const populateFavorites = (artists) => ({
  type: 'POPULATE_FAVORITES',
  artists
})

