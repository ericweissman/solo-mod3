import React from 'react'
import { shallow } from 'enzyme'
import { Card, mapDispatchToProps, mapStateToProps } from '../Card/Card'
import { addToFavorites, removeFromFavorites } from '../../actions'

describe('Card', () => {
  let wrapper
  const mockArtist = {
    name: 'PL',
    id: 'abc123',
    wiki: 'somelink',
    favorited: false
  }

  const mockArtistFavorited = {
    name: 'PL',
    id: 'abc123',
    wiki: 'somelink',
    favorited: true
  }

  const mockProps = {
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn(),
    favorites: []
  }

  it('should match the correct snapshot', () => {
    wrapper = shallow(<Card artist={mockArtist} {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the correct snapshot if the artist has been favorited', () => {
    wrapper = shallow(<Card artist={mockArtistFavorited} {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('handleFavorite', () => {
    it('should add artist to favorites if the artist has not been favorited', () => {
      wrapper = shallow(<Card artist={mockArtist} {...mockProps} />)
      let favorites = ['asasf']
      localStorage.setItem('favorites', JSON.stringify(favorites))
      const mockEvent = { preventDefault: jest.fn() }
      wrapper.instance().handleFavorite(mockEvent)
      expect(mockProps.addToFavorites).toHaveBeenCalledWith(mockArtist)
      localStorage.setItem('favorites', JSON.stringify(favorites.concat(mockArtist.id)))
      const itemsInStorage = JSON.parse(localStorage.getItem('favorites')).length
      expect(itemsInStorage).toEqual(2)
    })


    it('should remove the artist from favorites if the artist has not been favorited before', () => {
      wrapper = shallow(<Card artist={mockArtistFavorited} {...mockProps} />)
      const mockEvent = { preventDefault: jest.fn() }
      wrapper.instance().handleFavorite(mockEvent)
      expect(mockProps.removeFromFavorites).toHaveBeenCalledWith(mockArtistFavorited)
    })
  })


  describe('mapStateToProps', () => {
    it('should return an object with all of the genres', () => {
      const mockState = {
        favorites: [],
        testMSTP: 'fake',
        testTwo: 'also fake'
      }
      const expected = {
        favorites: [],
      }

      const mappedState = mapStateToProps(mockState)
      expect(mappedState).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with addToFavorites', () => {
      const mockDispatch = jest.fn()
      const mockArtist = { name: 'PL', id: '123abc', wiki: 'someurl', favorited: false }
      const actionToDispatch = addToFavorites(mockArtist)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addToFavorites(mockArtist)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch with removeFromFavorites', () => {
      const mockDispatch = jest.fn()
      const mockArtist = { name: 'PL', id: '123abc', wiki: 'someurl', favorited: false }
      const actionToDispatch = removeFromFavorites(mockArtist)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.removeFromFavorites(mockArtist)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})