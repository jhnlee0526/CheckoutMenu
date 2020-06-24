import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../client/src/components/App.jsx';
import PropertyData from '../client/src/components/PropertyData.jsx';
import CalendarModal from '../client/src/components/CalendarModal.jsx';

describe('<App /> rendering', () => {
  it('should render three <div>s', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.children('div')).toHaveLength(3);
  });
});

// describe('<PropertyData /> test', () => {
  // it('renders a star image', () => {
  //   const wrapper = shallow(<PropertyData />);
  //   expect(wrapper.find('Star')).to.have.lengthOf(1);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
// });

describe('<CalendarModal /> rendering', () => {
  it('should call componentDidMount', () => {
    const spy = jest.spyOn(CalendarModal.prototype, 'componentDidMount')
    mount(<CalendarModal />);
    expect(CalendarModal.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });
});