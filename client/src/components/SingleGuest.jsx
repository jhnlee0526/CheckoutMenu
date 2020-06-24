import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  background: none;
  border: 1px solid #b0b0b0;
`;

const SingleGuest = (props) => {
  let currentGuestCount;
  if (props.item === 'Adults') {
    currentGuestCount = props.adults;
  } else if (props.item === 'Children') {
    currentGuestCount = props.children;
  } else {
    currentGuestCount = props.infants;
  }
  return (
    <div>
      <span>
        {props.item}
      </span>
      <span>
        <Button onClick={props.minusClick}>-</Button>
      </span>
      <span>
        {currentGuestCount}
      </span>
      <span>
        <Button onClick={props.plusClick}>+</Button>
      </span>
    </div>
  );
};

export default SingleGuest;
