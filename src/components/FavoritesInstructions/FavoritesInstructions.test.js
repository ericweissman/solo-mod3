import React from 'react'
import FavoritesInstructions from './FavoritesInstructions'
import { shallow } from 'enzyme'

describe('FavoritesInstructions', () => {
  let wrapper
  it('should match the correct snapshot', () => {
    wrapper = shallow(<FavoritesInstructions />)
    expect(wrapper).toMatchSnapshot()
  })
})