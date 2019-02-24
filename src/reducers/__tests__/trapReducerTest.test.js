import trapReducer from '../trapReducer'

describe('futureBassReducer', () => {
  const mockData = {
    Similar: {
      Results: [{ Name: 'PL', wUrl: 'testurl', yID: 'abc123' }]
    }
  }

  const mockArtist = { name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }

  it('should return the default state', () => {
    const expected = []
    const result = trapReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with artists if the type is GET_TRAP_SUCCESS', () => {
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const result = trapReducer(undefined, {
      type: 'GET_TRAP_SUCCESS',
      artists: mockData
    })
    expect(result).toEqual(expected)
  })

  it('should toggle the favorited property if the type is ADD_TO_FAVORITES', () => {
    const initialState = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: true }]
    const result = trapReducer(initialState, {
      type: 'ADD_TO_FAVORITES',
      artist: mockArtist
    })
    expect(result).toEqual(expected)
  })

  it('should toggle the favorited property if the type is REMOVE_FROM_FAVORITES', () => {
    const initialState = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: true }]
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const result = trapReducer(initialState, {
      type: 'REMOVE_FROM_FAVORITES',
      artist: mockArtist
    })
    expect(result).toEqual(expected)
  })
})