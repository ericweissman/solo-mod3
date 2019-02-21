import futureBassReducer from '../futureBassReducer'

describe('futureBassReducer', () => {
  const mockData = {
    Similar: {
      Results: [{ Name: 'PL', wUrl: 'testurl', yID: 'testvideo' }]
    }
  }
  it('should return the default state', () => {
    const expected = []
    const result = futureBassReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with artists if the type is FETCH_ARTISTS_SUCCESS', () => {
    const expected = [{ name: 'PL', wiki: 'testurl', video: 'testvideo' }]
    const result = futureBassReducer(undefined, {
      type: 'FETCH_ARTISTS_SUCCESS',
      artists: mockData
    })
    expect(result).toEqual(expected)
  })
})