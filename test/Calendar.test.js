import React from 'react';
import { mount, shallow, render } from 'enzyme';
import CalendarModal from '../client/src/components/CalendarModal.jsx';
// import CalendarView from '../client/src/components/CalendarView.jsx';
// import CalendarMonth from '../client/src/components/CalendarMonth.jsx';


describe('<CalendarModal /> rendering', () => {
  it('should call componentDidMount', () => {
    const spy = jest.spyOn(CalendarModal.prototype, 'componentDidMount');
    mount(<CalendarModal />);
    expect(CalendarModal.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });
});

// describe('<CalendarMonth />', () => {
//   it('CalendarMonth should render two tables', () => {
//     const wrapper = shallow(<CalendarMonth />);
//     expect(wrapper.children('span')).toHaveBeenCalled();
//   });
// });