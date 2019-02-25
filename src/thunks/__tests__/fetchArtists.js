import { fetchArtists } from '../fetchArtists'
import { isLoading, hasErrored } from '../../actions'

describe ('fetchArtists', () => {
  let mockURL
  let mockDispatch
  let mockActionToDispatch
  const mockFavorites1 = [{ name: 'Eric', yID: '1', wUrl: 'aa' }]
  let mockFavorites2 = []
  const mockArtists = {
    Similar: {
      Results: [
        { name: 'Eric', yID: '1', wUrl: 'aa' }
      ]
    }
  }

  beforeEach(() => {
    mockURL = 'https://tastedive.com/api/similar?q=something'
    mockDispatch = jest.fn()
    mockActionToDispatch = jest.fn()
  })
  

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchArtists(mockURL, mockActionToDispatch)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('throws an error if the response is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something is not OK!'
    }))

    const thunk = fetchArtists(mockURL, mockActionToDispatch)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something is not OK!'))
  })

  it('calls dispatch with isLoading false if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    const thunk = fetchArtists(mockURL, mockActionToDispatch)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('calls dispatch with the correct actionToDispatch with results if the response is OK and there is matching favorite', async () => {
    const mockCleaned = [{ name: 'Eric', yID: '1', wUrl: 'aa', favorited: true }]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockArtists)
    }))

    const thunk = fetchArtists(mockURL, mockActionToDispatch, mockFavorites1)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch(mockCleaned))
  })

  it('calls dispatch with the correct actionToDispatch with results if the response is OK and there is no matching favorite', async () => {
    const mockCleaned = [{ name: 'Eric', yID: '1cvs', wUrl: 'aa', favorited: false }]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockArtists)
    }))
    const thunk = fetchArtists(mockURL, mockActionToDispatch, mockFavorites2)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch(mockCleaned))
  })

})