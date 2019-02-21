import glitchHopReducer from '../glitchHopReducer'

describe('glitchHopReducer', () => {
  it('should return default state', () => {
    const expected = []
    const result = glitchHopReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with artists if the type is FETCH_ARTISTS_SUCCESS', () => {
    const expected = [{ name: 'test artist' }]
    const result = glitchHopReducer(undefined, {
      type: 'FETCH_ARTISTS_SUCCESS',
      artists: [{ name: 'test artist' }]
    })
    expect(result).toEqual(expected)
  })
  // it('should set state with artists if the type is GET_FUTURE_BASS', () => {
  //   const expected = [{ name: 'test artist' }]
  //   const result = glitchHopReducer(undefined, {
  //     type: 'GET_GLITCH_HOP',
  //     artists: [{ name: 'test artist' }]
  //   })
  //   expect(result).toEqual(expected)
  // })
})