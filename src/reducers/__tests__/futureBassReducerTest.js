import futureBassReducer from '../futureBassReducer'

describe('futureBassReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = futureBassReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with artists if the type is FETCH_DATA_SUCCESS', () => {
    const expected = [{name: 'test artist'}]
    const result = futureBassReducer(undefined, {
      type: 'FETCH_DATA_SUCCESS',
      artists: [{name: 'test artist'}]
    })
    expect(result).toEqual(expected)
  })
  // it('should set state with artists if the type is GET_FUTURE_BASS', () => {
  //   const expected = [{name: 'test artist'}]
  //   const result = futureBassReducer(undefined, {
  //     type: 'GET_FUTURE_BASS',
  //     artists: [{name: 'test artist'}]
  //   })
  //   expect(result).toEqual(expected)
  // })
})