import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  width: 415px;
`;

const CheckIn = styled.span`
  text-align: center;
  float: left;
  margin: 5px;
  width: 180px;
  height: 20px;
`;

const CheckOut = styled.span`
  text-align: center;
  float: right;
  margin: 5px;
  width: 180px;
  height: 20px;
`;

const Month = styled.span`
  justify-content: center;
  font-size: 10px;
  // margin: 10px;
`;

const NextArrow = styled.button`
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  float: right;
  text-align: right;
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
  float: left;
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
 