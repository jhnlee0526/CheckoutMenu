import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import SingleCalendar from './SingleCalendar.jsx';

// const Modal = styled.div`
//   className: "modal",
//   background: pink;
// `;


// pass down all of the months for the next year
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [],
    };
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
       <SingleCalendar months={this.state.months} />
      </div>
    );
  }
}

export default CalendarModal;