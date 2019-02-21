import {isLoading, hasErrored, fetchArtistsSuccess} from '../actions'

export const fetchArtists = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(fetchArtistsSuccess(result))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}