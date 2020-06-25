import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
`;

const CheckIn = styled.span`
  text-align: center;
  float: left;
  // margin: 5px;
`;

const CheckOut = styled.span`
  text-align: center;
  float: right;
  // margin: 5px;
`;

const BetweenCalendars = styled.span`
  margin: 10px;
`;

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 9px;
`;

const CalendarView = (props) => (
  <Container>
  <CheckIn>
    <StyledTable>
      <tbody>
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
)

export default CalendarView;