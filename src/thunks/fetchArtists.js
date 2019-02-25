import {isLoading, hasErrored } from '../actions'

export const fetchArtists = (url, actionToDispatch, favorites) => {
  console.log(favorites)
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      const cleaned = await result.Similar.Results.map((artist) => {
        if(!favorites.length) {
          artist.favorited = false
        } else {
          favorites.forEach((favorite) => {
            if (favorite.id === artist.yID) {
              artist.favorited = true
            }
        })
      }
      return artist 
    })
      dispatch(actionToDispatch(cleaned))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}