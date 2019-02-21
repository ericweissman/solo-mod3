import * as actions from './index'

describe('action', () => {
  const bool = true
  const artists = [{ Name: 'Zhu', wURL: 'https://en.wikipedia', yID: 'asASG121s' }]
  const error = 'Some error'

  it('should return isLoading with a bool', () => {
    const expected = {
      type: 'IS_LOADING',
      bool
    }
    const result = actions.isLoading(bool)
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

  it('should return getDeepHouse with artists', () => {

    const expected = {
      type: 'GET_DEEP_HOUSE',
      artists
    }
    const result = actions.getDeepHouse(artists)
    expect(result).toEqual(expected)
  })

  it('should return getFutureBass with artists', () => {
    const expected = {
      type: 'GET_FUTURE_BASS',
      artists
    }
    const result = actions.getFutureBass(artists)
    expect(result).toEqual(expected)
  })

  it('should return getGlitchHop with artists', () => {
    const expected = {
      type: 'GET_GLITCH_HOP',
      artists
    }
    const result = actions.getGlitchHop(artists)
    expect(result).toEqual(expected)
  })

  it('should return trap with artists', () => {
    const expected = {
      type: 'GET_TRAP',
      artists
    }
    const result = actions.getTrap(artists)
    expect(result).toEqual(expected)
  })
})