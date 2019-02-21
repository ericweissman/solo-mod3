import trapReducer from '../trapReducer'

describe('futureBassReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = trapReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with artists if the type is FETCH_DATA_SUCCESS', () => {
    const expected = [{ name: 'test artist' }]
    const result = trapReducer(undefined, {
      type: 'FETCH_DATA_SUCCESS',
      artists: [{ name: 'test artist' }]
    })
    expect(result).toEqual(expected)
  })
  // it('should set state with artists if the type is GET_TRAP', () => {
  //   const expected = [{ name: 'test artist' }]
  //   const result = trapReducer(undefined, {
  //     type: 'GET_TRAP',
  //     artists: [{ name: 'test artist' }]
  //   })
  //   expect(result).toEqual(expected)
  // })
})