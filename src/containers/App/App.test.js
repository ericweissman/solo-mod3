import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { populateFavorites } from '../../actions'
import { NotFound } from '../../components/NotFound/NotFound'
import { Instructions} from '../../components/Instructions/Instructions'
import { ArtistArea} from '../ArtistArea/ArtistArea'
import { shallow, mount } from 'enzyme'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../../reducers/index'
import thunk from 'redux-thunk';


const mockProps = {
  deepHouse: [],
  futureBass: [],
  glitchHop: [],
  trap: [],
  hasErrored: '',
  populateFavorites: jest.fn(),
}

const withError = {
  deepHouse: [],
  futureBass: [],
  glitchHop: [],
  trap: [],
  hasErrored: 'Some error',
  populateFavorites: jest.fn(),
}

describe('App', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  let wrapper

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App {...mockProps}/>
        </BrowserRouter>
      </Provider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('snapshots', () => {
    it('should have the correct snapshot when there is no error', () => {
      wrapper = shallow(<App {...mockProps} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('should have the correct snapshot when there is an error', () => {
      wrapper = shallow(<App {...withError} />)
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('getRouteForGenre', () => {
    const mockPropsRoutes = {
      match: {
        path: '/glitchHop'
      }
    }

    it('should display the glitchHop in Artist area based on path', () => {
      wrapper = shallow(<App {...mockProps} />)
      const result = wrapper.instance().getRouteForGenre(mockPropsRoutes)
      const ghArtistArea = shallow(result)
      expect(ghArtistArea).toMatchSnapshot()
    })
  })

  describe('get from localstorage if there is favorites', () => {
    wrapper = shallow(<App {...mockProps} />)
    const favorites = [{name: 'JEOD', id:'aa11', wiki: 'sfaf', favorited: true}]
    localStorage.setItem('favorites', JSON.stringify(favorites))
    wrapper.instance().componentDidMount()
    expect(mockProps.populateFavorites).toHaveBeenCalled()
  })
  describe('mapStateToProps', () => {
    it('should return the correct pieces of state', () => {
      const mockState = {
        deepHouse: [],
        futureBass: [],
        glitchHop: [],
        trap: [],
        hasErrored: false,
        test: 1,
        example: 2
      }

      const expected = {
        deepHouse: [],
        futureBass: [],
        glitchHop: [],
        trap: [],
        hasErrored: false,
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with populateFavorites', () => {
      const mockDispatch = jest.fn()
      const mockFavorites = ['asfasfa', 'gdsgrsdg']
      const actionToDispatch = populateFavorites(mockFavorites)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.populateFavorites(mockFavorites)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
