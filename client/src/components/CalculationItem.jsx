import React from 'react';

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
    <div>
      <span>
        {key}
      </span>
      <span>
        {/* enter the question mark button  */}
      </span>
      <span>
        {/* edit if we want to change this to be a different amount */}
        ${Object.values(props.data)[0]}
      </span>
    </div>
  );
};

export default CalculationItem;