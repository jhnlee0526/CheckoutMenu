import React from 'react';
import styled from 'styled-components';
import CalculationItem from './CalculationItem.jsx';

const Container = styled.div`
  margin: 10px 0;
`;

const LineItem = styled.div`
  font: "Helvetica Neue", sans-serif;
  margin: 15px 5px 0 5px;
  overflow: hidden;
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  float: right;
`;

const Total = styled.div`
  font-weight: bold;
  margin: 15px 5px;
`;

const Line = styled.div`
  width: 100%;
  margin: 15px 5px 20px 5px;
  border-bottom: 1px solid #717171;
`;

const Calculations = (props) => {
  // calculations data is an array, so need to fix that
  const propsData = props.calculationsData;
  const total = props.basePrice + propsData[0].cleaningFee + propsData[1].serviceFee + propsData[2].occupancyFee;
  return (
    <Container>
      <LineItem>
        {/* edit this to be however many nights it is */}
        <Left>${props.rate} x {3} nights</Left>
        {/* enter the question mark button  */}
        <Right>${props.basePrice}</Right>
      </LineItem>

      <div>
        {propsData.map(data => (
          <CalculationItem data={data} />
        ))}
      </div>

      {/* line to separate calculations and total */}
      <Line></Line>

      <Total>
        <Left>Total</Left>
        <Right>${total}</Right>
      </Total>
    </Container>
  );
};

export default Calculations;
