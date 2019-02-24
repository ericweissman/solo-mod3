import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../NotFound/NotFound'

describe('NotFound', () => {
  let wrapper
  it('should match the correct snapshot', () => {
    wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
  })
})