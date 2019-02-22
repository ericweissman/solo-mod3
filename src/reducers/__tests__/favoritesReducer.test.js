import favoritesReducer from '../favoritesReducer'
const mockArtist = {
  name: 'DVS',
  wiki: 'nfalsknflas',
  id: 'a1',
  favorited: false,
}

describe('favoritesReducer', () => {
  it('should return default state', () => {
    const expected = []
    const result = favoritesReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return state with a new ID if the type is ADD_TO_FAVORITES', () => {
    const initialState = [{}, {}]
    const expected = [{}, {}, mockArtist]
    const result = favoritesReducer(initialState, {
      type: 'ADD_TO_FAVORITES',
      artist: mockArtist
    })
    expect(result).toEqual(expected)
  })

  it('should return state with the correct ID removed is the type is REMOVE_FROM_FAVORITES', () => {
    const initialState = [{}, {}, mockArtist]
    const expected = [{}, {}]
    const result = favoritesReducer(initialState, {
      type: 'REMOVE_FROM_FAVORITES',
      id: 'a1'
    })
    expect(result).toEqual(expected)
  })

  it('should return artists when the type is POPULATE_FAVORITES', () => {
    const initialState = []
    const expected = [mockArtist]
    const result = favoritesReducer(initialState, {
      type: 'POPULATE_FAVORITES',
      artists: mockArtist
    })
  })
})