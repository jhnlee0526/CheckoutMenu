import React from 'react';
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

const CalendarView = (props) => (
  <Container>
  <CheckIn>
    <table>
      <tbody>
        {props.calendar[0]}
      </tbody>
    </table>
  </CheckIn>
  <CheckOut>
    <table>
      <tbody>
        {props.calendar[1]}
      </tbody>
    </table>
  </CheckOut>
</Container>
)

export default CalendarView;