import React from 'react';
import styled from 'styled-components';

const LineItem = styled.div`
  overflow: hidden;
  margin: 5px;
  font-size: 10px;
`;

const Left = styled.span`
  float: left;
  width: 70%;
`;

const Right = styled.span`
  float: right;
  align-items: right;
`;

const CalculationItem = (props) => {
  const currentKey = Object.keys(props.data)[0];
  let key;
  if (currentKey === 'cleaningFee') {
    key = 'Cleaning fee';
  } else if (currentKey === 'serviceFee') {
    key = 'Service fee';
  } else {
    key = 'Occupancy taxes and fees';
  }
  return (
    <LineItem>
      <Left>
        {key}
      </Left>
      {/* <span> */}
        {/* enter the question mark button  */}
      {/* </span> */}
      <Right>
        {/* edit if we want to change this to be a different amount */}
        ${Object.values(props.data)[0]}
      </Right>
    </LineItem>
  );
};

export default CalculationItem;