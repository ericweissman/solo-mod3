import React from 'react'
import { shallow } from 'enzyme'
import { fetchArtists } from '../../thunks/fetchArtists'
import * as actions from '../../actions'
import * as url from '../../utils/urls'
import { mockPropsFetchedWithFaves, glitchHop, deepHouse, futureBass, trap, favorites, emptyGH, emptyTrap, emptyDH, emptyFB, emptyPath } from '../ArtistArea/mockData'
import { ArtistArea, mapDispatchToProps, mapStateToProps } from '../ArtistArea/ArtistArea'

jest.mock('../../thunks/fetchArtists')


describe('ArtistArea', () => {
  let wrapper

  describe('snapshots', () => {
    it('should match the correct snapshot', () => {
      wrapper = shallow(<ArtistArea {...glitchHop} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('should match the correct snapshot', () => {
      wrapper = shallow(<ArtistArea {...deepHouse} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('should match the correct snapshot', () => {
      wrapper = shallow(<ArtistArea {...futureBass} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('should match the correct snapshot', () => {
      wrapper = shallow(<ArtistArea {...trap} />)
      expect(wrapper).toMatchSnapshot()
    })
    it('should match the correct snapshot', () => {
      wrapper = shallow(<ArtistArea {...favorites} />)
      expect(wrapper).toMatchSnapshot()
    })
  })


  describe('getArtists', () => {
    let wrapper
    it('should fetch the correct data if there is a matching path', () => {
      wrapper = shallow(<ArtistArea {...emptyGH} />)
      wrapper.instance().getArtists()
      expect(emptyGH.fetchArtists).toHaveBeenCalled()
    })
    it('should fetch the correct data if there is a matching path', () => {
      wrapper = shallow(<ArtistArea {...emptyTrap} />)
      wrapper.instance().getArtists()
      expect(emptyTrap.fetchArtists).toHaveBeenCalled()
    })
    it('should fetch the correct data if there is a matching path', () => {
      wrapper = shallow(<ArtistArea {...emptyDH} />)
      wrapper.instance().getArtists()
      expect(emptyDH.fetchArtists).toHaveBeenCalled()
    })
    it('should fetch the correct data if there is a matching path', () => {
      wrapper = shallow(<ArtistArea {...emptyFB} />)
      wrapper.instance().getArtists()
      expect(emptyFB.fetchArtists).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with the correct properties', () => {
      const mockState = {
        glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
        trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
        deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
        futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
        isLoading: false,
        favorites: ['1234'],
        testProp: 'fake',
        testProp2: 'also fake'
      }
      const expected = {
        glitchHop: [{ name: 'test', id: '1234', wiki: 'asfas', favorited: false }],
        trap: [{ name: 'test', id: '22', wiki: 'asfas', favorited: false }],
        deepHouse: [{ name: 'test', id: '33', wiki: 'asfas', favorited: false }],
        futureBass: [{ name: 'test', id: '44', wiki: 'asfas', favorited: false }],
        isLoading: false,
        favorites: ['1234'],
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct action when there has not been a fetch', () => {
      // wrapper = shallow(<ArtistArea {...emptyGH} />)
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchArtists(url.glitchHop, actions.getGlitchHopSuccess)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchArtists(url.glitchHop, actions.getGlitchHopSuccess)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})