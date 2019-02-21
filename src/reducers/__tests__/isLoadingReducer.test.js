import isLoadingReducer from '../isLoadingReducer'
import * as actions from '../../actions'

describe('isLoadingReducer', () => {
  it('should return initial state', () => {
    const expected = true
    const result = isLoadingReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('shold return a bool is type is IS_LOADING ', () => {
    const expected = false
    const result = isLoadingReducer(undefined, {type: 'IS_LOADING', isLoading: false})
    expect(result).toEqual(expected)
  })
})