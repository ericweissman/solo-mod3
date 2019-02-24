import React from 'react'
import { shallow } from 'enzyme'
import Error from '../Error/Error'

describe('Error', () => {
  let wrapper
  const mockMessage = '404'
  it('should match the correct snapshot', () => {
    wrapper = shallow(<Error message={mockMessage}/>)
    expect(wrapper).toMatchSnapshot()
  })
})