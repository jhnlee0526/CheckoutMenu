import React from 'react';
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

const Month = styled.span`
  justify-content: center;
  font-size: 12px;
  margin: 10px;
`;

const NextArrow = styled.button`
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  text-align: center;
  background: none;
  :focus {
    outline:0;
  }
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
  :focus {
    outline:0;
  }
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
        <Month>{props.month[0]}</Month>
      </CheckIn>
      <CheckOut>
        <Month>{props.month[1]}</Month>
        <span>
          {nextButton}
        </span>
      </CheckOut>
    </Container>
  );
};

export default CalendarMonth;
 