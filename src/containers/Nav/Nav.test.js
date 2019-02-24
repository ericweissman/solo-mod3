import React from 'react'
import { shallow } from 'enzyme'
import Nav from '../Nav/Nav'

describe('Nav', () => {
  let wrapper
  it('should match the correct snapshot', () => {
    wrapper = shallow(<Nav />)
    expect(wrapper).toMatchSnapshot()
  })
})