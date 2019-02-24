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
  hasErrored: false,
  populateFavorites: jest.fn(),
}

const withError = {
  deepHouse: [],
  futureBass: [],
  glitchHop: [],
  trap: [],
  hasErrored: true,
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
          <App />
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
  
  describe('Routes', () => {
    it('should render Instructions with the home route', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Instructions)).toHaveLength(1)
    })
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
