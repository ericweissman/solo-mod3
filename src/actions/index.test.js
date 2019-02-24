import * as actions from './index'

describe('action', () => {
  const bool = true
  const artists = [{ Name: 'Zhu', wURL: 'https://en.wikipedia', yID: 'asASG121s' }]
  const error = 'Some error'
  const artist = { Name: 'Zhu', wiki: 'https://en.wikipedia', id: 'asASG121s', favorited: false }

  it('should return isLoading with a bool', () => {
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = actions.isLoading(true)
    expect(result).toEqual(expected)
  })

  it('should return hasErrored with an error', () => {
    const expected = {
      type: 'HAS_ERRORED',
      error
    }
    const result = actions.hasErrored(error)
    expect(result).toEqual(expected)
  })

  it('should return getDeepHouseSuccess with artists', () => {

    const expected = {
      type: 'GET_DEEP_HOUSE_SUCCESS',
      artists
    }
    const result = actions.getDeepHouseSuccess(artists)
    expect(result).toEqual(expected)
  })

  it('should return getFutureBassSuccess with artists', () => {
    const expected = {
      type: 'GET_FUTURE_BASS_SUCCESS',
      artists
    }
    const result = actions.getFutureBassSuccess(artists)
    expect(result).toEqual(expected)
  })

  it('should return getGlitchHopSuccess with artists', () => {
    const expected = {
      type: 'GET_GLITCH_HOP_SUCCESS',
      artists
    }
    const result = actions.getGlitchHopSuccess(artists)
    expect(result).toEqual(expected)
  })

  it('should return trapSuccess with artists', () => {
    const expected = {
      type: 'GET_TRAP_SUCCESS',
      artists
    }
    const result = actions.getTrapSuccess(artists)
    expect(result).toEqual(expected)
  })

  it('should return addToFavorites with artist', () => {
    const expected = {
      type: 'ADD_TO_FAVORITES',
      artist
    }
    const result = actions.addToFavorites(artist)
    expect(result).toEqual(expected)
  })

  it('should return removeFromFavorites with artist', () => {
    const expected = {
      type: "REMOVE_FROM_FAVORITES",
      artist
    }
    const result = actions.removeFromFavorites(artist)
    expect(result).toEqual(expected)
  })

  it('should return populateFavorites with artists', () => {
    const expected = {
      type: 'POPULATE_FAVORITES',
      artists
    }
    const result = actions.populateFavorites(artists)
    expect(result).toEqual(expected)
  })
})