import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Dropdown from '../client/src/components/Dropdown.jsx';
import Guest from '../client/src/components/Guests.jsx';
import SingleGuest from '../client/src/components/SingleGuest.jsx';

describe('<Dropdown />', () => {
  it('Dropdown renders with default props', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper).toMatchSnapshot();
  });
});

// describe('<Guest />', () => {
//   it('should have three options for guests', () => {
//     const list = ['Adults', 'Children', 'Infants']
//     const wrapper = shallow(<Guest {...list}/>);
//     expect(wrapper).toHaveLength(3);
//   });
// });

describe('<SingleGuest />', () => {
  it('renders state', () => {
    const options = {
      adults: 1,
      children: 0,
      infants: 0,
    }
    const guest = shallow(<SingleGuest {...options}/>);
    expect(options.adults).toBe(1);
  });
});