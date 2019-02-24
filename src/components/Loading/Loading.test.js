import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../Loading/Loading'

describe('Loading', () => {
  let wrapper
  it('should match the correct snapshot', () => {
    wrapper = shallow(<Loading />)
    expect(wrapper).toMatchSnapshot()
  })
})