import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

// const Modal = styled.div`
//   className: "modal",
//   background: pink;
// `;


const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
    };
    this.getFirstDay = this.getFirstDay.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
    this.currentDay = this.currentDay.bind(this);
  }

  getFirstDay() {
    let date = this.state.dateObject;
    let first = moment(date).startOf("month").format("d");
    return first;
  }

  daysInMonth() {
    return 32 - new Date(currentYear, currentMonth, 32).getDate();
  }

  currentDay() {
    return this.state.dateObject.format("D");
  }

  
  render() {
    const daysOfWeek = moment.weekdaysMin();
    const weekdays = daysOfWeek.map((day) => <th className="week-days">{day}</th>);

    let blanks = [];
    for (let i = 0; i < this.getFirstDay(); i++) {
      blanks.push(
        <td className="empty calendar-day">{""}</td>,
      );
    }

    let allDaysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let current = d == this.currentDay() ? "today" : "";
      allDaysInMonth.push(
        <td className={`calendar-day ${current}`}>{d}</td>,
      );
    }

    let totalSlots = [...blanks, ...allDaysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, column) => {
      if (column % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (column === totalSlots.length - 1) {
        rows.push(cells);
      }
    });
    let daysinmonth = rows.map((d, i) => (<tr>{d}</tr>));

    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div>
          {/* checkin */}
          <table>
            <thead>
              <tr>
                <th colSpan="7">{moment().format("MMMM YYYY")}</th>
              </tr>
              <tr>
                {weekdays}
              </tr>
            </thead>
            <tbody>
              {daysinmonth}
              {/* {firstCalendar(currentMonth, currentYear)} */}
            </tbody>
          </table>



          {/* checkout */}
          <table>
            <thead>

            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CalendarModal;