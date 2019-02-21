export const getDeepHouse = (artists) => ({
  type: 'GET_DEEP_HOUSE',
  artists
})

export const getFutureBass = (artists) => ({
  type: 'GET_FUTURE_BASS',
  artists
})

export const getGlitchHop = (artists) => ({
  type: 'GET_GLITCH_HOP',
  artists
})

export const getTrap = (artists) => ({
  type: 'GET_TRAP',
  artists
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
})