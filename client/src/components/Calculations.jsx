import React from 'react';
import CalculationItem from './CalculationItem.jsx';

const Calculations = (props) => {
  // calculations data is an array, so need to fix that
  const propsData = props.calculationsData;
  const total = props.basePrice + propsData[0].cleaningFee + propsData[1].serviceFee + propsData[2].occupancyFee;
  return (
    <div>
      <div>
        {/* edit this to be however many nights it is */}
        <span>${props.rate} x {3} nights</span>
        {/* enter the question mark button  */}
        <span>${props.basePrice}</span>
      </div>

      <div>
        {propsData.map(data => (
          <CalculationItem data={data} />
        ))}
      </div>

      {/* line to separate calculations and total */}

      <div>
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

export default Calculations;