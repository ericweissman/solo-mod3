import React from 'react'
import {shallow} from 'enzyme'
import Instructions from '../Instructions/Instructions'

describe('Instructions', () => {
  let wrapper
  it('should match the correct snapshot', () => {
    wrapper = shallow(<Instructions />)
    expect(wrapper).toMatchSnapshot()
  })
})