import React from 'react';
import { mount, shallow, render } from 'enzyme';
import CalendarModal from '../client/src/components/CalendarModal.jsx';
// import CalendarView from '../client/src/components/CalendarView.jsx';
// import CalendarModal from '../client/src/components/CalendarModal.jsx';


describe('<CalendarModal /> rendering', () => {
  it('should call componentDidMount', () => {
    const spy = jest.spyOn(CalendarModal.prototype, 'componentDidMount');
    mount(<CalendarModal />);
    expect(CalendarModal.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });
});

// describe('<CalendarView />', () => {
//   it('CalendarView should render two tables', () => {
//     const wrapper = shallow(<CalendarView />);
//     expect(wrapper.exists()).toBe(true);
//     expect(wrapper.find('table').length).toBe(2);
//   });
// });