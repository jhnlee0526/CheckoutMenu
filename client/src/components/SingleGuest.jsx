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

const SingleGuest = (props) => (
  <div>
    <span>
      Adults
    </span>
    <span>
      <Button onClick={props.minusClick}>-</Button>
    </span>
    <span>
      {props.guests}
    </span>
    <span>
      <Button onClick={props.plusClick}>+</Button>
    </span>
  </div>
);

export default SingleGuest;
