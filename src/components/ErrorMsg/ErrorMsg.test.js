import React from 'react'
import { shallow } from 'enzyme'
import ErrorMsg from '../ErrorMsg/ErrorMsg'

describe('ErrorMsg', () => {
  let wrapper
  const mockMessage = '404'
  it('should match the correct snapshot', () => {
    wrapper = shallow(<ErrorMsg message={mockMessage}/>)
    expect(wrapper).toMatchSnapshot()
  })
})