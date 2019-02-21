import hasErroredReducer from '../hasErroredReducer'

describe('hasErroredReducer', () => {
  it('should return default state', () => {
    const expected = ''
    const result = hasErroredReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with the correct error message', () => {
    const expected = '404'
    const result = hasErroredReducer(undefined, {
      type: 'HAS_ERRORED',
      error: '404'
    })
    expect(result).toEqual(expected)
  })
})