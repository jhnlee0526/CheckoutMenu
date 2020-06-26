import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
`;

const CheckIn = styled.span`
  text-align: center;
  float: left;
`;

const CheckOut = styled.span`
  text-align: center;
  float: right;
`;

const BetweenCalendars = styled.span`
  margin: 5px;
`;

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 13px;
`;

const CalendarView = (props) => (
  <Container>
  <CheckIn>
    <StyledTable>
      <tbody>
        {console.log(props.calendar[0])}
        {props.calendar[0]}
      </tbody>
    </StyledTable>
  </CheckIn>
  <BetweenCalendars> </BetweenCalendars>
  <CheckOut>
    <StyledTable>
      <tbody>
        {props.calendar[1]}
      </tbody>
    </StyledTable>
  </CheckOut>
</Container>
);

export default CalendarView;