import deepHouseReducer from '../deepHouseReducer'

describe('deepHouseReducer', () => {
  const mockData = {
    Similar: {
      Results: [{ Name: 'PL', wUrl: 'testurl', yID: 'abc123'}]
    }
  }
  const mockArtist = { name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }
  
  it('should return default state', () => {
    const expected = []
    const result = deepHouseReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return artists if the type is GET_DEEP_HOUSE_SUCCESS', () => {
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const result = deepHouseReducer(undefined, {
      type: 'GET_DEEP_HOUSE_SUCCESS',
      artists: mockData
    })
    expect(result).toEqual(expected)
  })

  it('should toggle the favorited property if the type is ADD_TO_FAVORITES', () => {
    const initialState = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: true }]
    const result = deepHouseReducer(initialState, {
      type: 'ADD_TO_FAVORITES',
      artist: mockArtist
    })
    expect(result).toEqual(expected)
  })

  it('should toggle the favorited property if the type is REMOVE_FROM_FAVORITES', () => {
    const initialState = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: true }]
    const expected = [{ name: 'PL', wiki: 'testurl', id: 'abc123', favorited: false }]
    const result = deepHouseReducer(initialState, {
      type: 'REMOVE_FROM_FAVORITES',
      artist: mockArtist
    })
    expect(result).toEqual(expected)
  })
})