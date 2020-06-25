import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 50%;
  width: 23px;
  height: 23px;
  text-align: center;
  align-items: center;
  background: none;
  border: .5px solid #b0b0b0;
  font-size: 16px;
  padding: 2px;
  margin: 5px;
  color: #717171;
  :focus {
    outline:0;
  }
`;

const EachGuest = styled.div`
  padding: 12px 5px;
  font-size: 12px;
`;

const Msg = styled.div`
  font-size: 10px;
`;

const Category = styled.div`
  display: inline-block;
`;

const Buttons = styled.div`
  display: inline-block;
  float: right;
  text-align: center;
`;

const Count = styled.span`
  margin: 5px;
`;

const TransparentButton = styled.button`
  border-radius: 50%;
  width: 23px;
  height: 23px;
  text-align: center;
  align-items: center;
  background: none;
  border: .5px solid #b0b0b0;
  font-size: 16px;
  padding: 2px;
  margin: 5px;
  color: #717171;
  opacity: 0.3;
  :focus {
    outline:0;
  }
`;

const SingleGuest = (props) => {
  let currentGuestCount;
  let msg = '';
  if (props.item === 'Adults') {
    currentGuestCount = props.adults;
  } else if (props.item === 'Children') {
    currentGuestCount = props.children;
    msg = 'Ages 2-12';
  } else {
    currentGuestCount = props.infants;
    msg = 'Under 2';
  }
  let currentMinusButton;
  if (currentGuestCount === 0 || (props.item === 'Adults' && currentGuestCount === 1)) {
    currentMinusButton = <TransparentButton onClick={props.minusClick}>-</TransparentButton>;
  } else {
    currentMinusButton = <Button onClick={props.minusClick}>-</Button>;
  }

  return (
    <EachGuest>
      <Category>
        <div>
          {props.item}
        </div>
        <Msg>
          {msg}
        </Msg>
      </Category>
      <Buttons>
        <span>
          {currentMinusButton}
        </span>
        <Count>
          {currentGuestCount}
        </Count>
        <span>
          <Button onClick={props.plusClick}>+</Button>
        </span>
      </Buttons>
    </EachGuest>
  );
};

export default SingleGuest;
