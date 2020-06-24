import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
`;

const CheckIn = styled.span`
  text-align: center;
  float: left;
  margin: 5px;
`;

const CheckOut = styled.span`
  text-align: center;
  float: right;
  margin: 5px;
`;

const CalendarMonth = (props) => {
  const daysOfWeek = moment.weekdaysMin();
  const weekdays = daysOfWeek.map((day, i) => <th key={i} className="week-days">{day}</th>);
  return (
    <Container>
      <CheckIn>
        <table>
          <thead>
            <tr>
              <th colSpan="7">{props.month[0]}</th>
            </tr>
            <tr>
              {weekdays}
            </tr>
          </thead>
          <tbody>
            {props.calendar[0]}
          </tbody>
        </table>
      </CheckIn>
      <CheckOut>
        <table>
          <thead>
            <tr>
              <th colSpan="7">{props.month[1]}</th>
              {/* <button>Arrow</button> */}
            </tr>
            <tr>
              {weekdays}
            </tr>
          </thead>
          <tbody>
            {props.calendar[1]}
          </tbody>
        </table>
      </CheckOut>
    </Container>
  );
};

export default CalendarMonth;
 