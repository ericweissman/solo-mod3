import { fetchArtists } from '../fetchArtists'
import { isLoading, hasErrored,  fetchArtistsSuccess} from '../../actions'

describe ('fetchArtists', () => {
  let mockURL
  let mockDispatch

  beforeEach(() => {
    mockURL = 'https://tastedive.com/api/similar?q=something'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchArtists(mockURL)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('throws an error if the response is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something is not OK!'
    }))

    const thunk = fetchArtists(mockURL)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something is not OK!'))
  })

  it('calls dispatch with isLoading false if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    const thunk = fetchArtists(mockURL)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('calls dispatch with fetchArtistSuccess with results if the response is OK', async () => {
    const mockArtists = [{name: 'PL'}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockArtists)
    }))

    const thunk = fetchArtists(mockURL)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(fetchArtistsSuccess(mockArtists))
  })
})