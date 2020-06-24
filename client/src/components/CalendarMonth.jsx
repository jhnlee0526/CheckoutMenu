import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
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

const NextArrow = styled.button`
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  text-align: center;
  background: none;
  :hover {
    background-color: #f7f7f7;
  }
`;

const PreviousArrow = styled.button`
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  text-align: center;
  background: none;
  :hover {
    background-color: #f7f7f7;
  }
`;

const CalendarMonth = (props) => {
  let previousButton;
  if (props.togglePrevious) {
    previousButton = <PreviousArrow onClick={props.previousClick}>{'<'}</PreviousArrow>
  }
  let nextButton;
  if (props.toggleNext) {
    nextButton = <NextArrow onClick={props.nextClick}>{'>'}</NextArrow>
  }
  return (
    <Container>
      <CheckIn>
        <span>
          {previousButton}
        </span>
        <span>{props.month[0]}</span>
      </CheckIn>
      <CheckOut>
        <span>{props.month[1]}</span>
        <span>
          {nextButton}
        </span>
      </CheckOut>
    </Container>
  );
};

export default CalendarMonth;
 