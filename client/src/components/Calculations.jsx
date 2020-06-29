import React from 'react';
import styled from 'styled-components';
import CalculationItem from './CalculationItem.jsx';

const Container = styled.div`
  margin: 15px 0;
  font-size: 10px;
`;

const LineItem = styled.div`
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
  width: 205px;
  margin: 15px 5px;
  border-bottom: .5px solid #dddddd;
`;

class Calculations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    const propsData = this.props.calculationsData;
    const total = this.props.basePrice + propsData[0].cleaningFee + propsData[1].serviceFee + propsData[2].occupancyFee;
    this.setState({
      total: total,
    });
    this.props.getTotalCost(total);
  }

  render() {
    const propsData = this.props.calculationsData;
    return (
      <Container>
        <LineItem>
          <Left>${this.props.rate} x {this.props.nights} nights</Left>
          {/* enter the question mark button  */}
          <Right>${this.props.basePrice}</Right>
        </LineItem>
        <div>
          {propsData.map((data, i) => (
            <CalculationItem data={data} key={i} />
          ))}
        </div>
        {/* line to separate calculations and total */}
        <Line></Line>
        <Total>
          <Left>Total</Left>
          <Right>${this.state.total}</Right>
        </Total>
      </Container>
    );
  }
};

export default Calculations;
