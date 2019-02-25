import futureBassReducer from '../futureBassReducer'

describe('futureBassReducer', () => {
  const mockData = [{ Name: 'PL', wUrl: 'testurl', yID: 'abc123', favorited: false }]


  const mockArtist = { name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }

  it('should return the default state', () => {
    const expected = []
    const result = futureBassReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with artists if the type is GET_FUTURE_BASS_SUCCESS', () => {
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const result = futureBassReducer(undefined, {
      type: 'GET_FUTURE_BASS_SUCCESS',
      artists: mockData
    })
    expect(result).toEqual(expected)
  })

  it('should toggle the favorited property if the type is ADD_TO_FAVORITES', () => {
    const initialState = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: true }]
    const result = futureBassReducer(initialState, {
      type: 'ADD_TO_FAVORITES',
      artist: mockArtist
    })
    expect(result).toEqual(expected)
  })

  it('should not toggle the favorited property if the type is ADD_TO_FAVORITES and they are not matching ID', () => {
    const initialState = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const result = futureBassReducer(initialState, {
      type: 'ADD_TO_FAVORITES',
      artist: { name: 'test', wiki: 'a', id: '3333', favorited: false }
    })
    expect(result).toEqual(expected)
  })

  it('should toggle the favorited property if the type is REMOVE_FROM_FAVORITES', () => {
    const initialState = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: true }]
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const result = futureBassReducer(initialState, {
      type: 'REMOVE_FROM_FAVORITES',
      artist: mockArtist
    })
    expect(result).toEqual(expected)
  })

  it('should not toggle the favorited property if the type is REMOVE_FROM_FAVORITES and they are not matching ID', () => {
    const initialState = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const result = futureBassReducer(initialState, {
      type: 'REMOVE_FROM_FAVORITES',
      artist: { name: 'test', wiki: 'a', id: '3333', favorited: false }
    })
    expect(result).toEqual(expected)
  })
})