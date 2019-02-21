import deepHouseReducer from '../deepHouseReducer'

describe('deepHouseReducer', () => {
  const mockData = {
    Similar: {
      Results: [{Name: 'PL', wUrl: 'testurl', yID: 'testvideo'}]
    }
  }
  it('should return default state', () => {
    const expected = []
    const result = deepHouseReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return artists if the type is FETCH_ARTISTS_SUCCESS', () => {
    const expected = [{ name: 'PL', wiki: 'testurl', video: 'testvideo' }]
    const result = deepHouseReducer(undefined, {
      type: 'FETCH_ARTISTS_SUCCESS',
      artists: mockData
    })
    expect(result).toEqual(expected)
  })
})