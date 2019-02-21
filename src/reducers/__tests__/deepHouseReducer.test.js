import deepHouseReducer from '../deepHouseReducer'

describe('deepHouseReducer', () => {
  it('should return default state', () => {
    const expected = []
    const result = deepHouseReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return artists if the type is FETCH_DATA_SUCCESS', () => {
    const expected = [{name: 'Test artist'}]
    const result = deepHouseReducer(undefined, {
      type: 'FETCH_DATA_SUCCESS',
      artists: [{name: 'Test artist'}]
    })
    expect(result).toEqual(expected)
  })
  // it('should return artists if the type is GET_DEEP_HOUSE', () => {
  //   const expected = [{name: 'Test artist'}]
  //   const result = deepHouseReducer(undefined, {
  //     type: 'GET_DEEP_HOUSE',
  //     artists: [{name: 'Test artist'}]
  //   })
  //   expect(result).toEqual(expected)
  // })
})