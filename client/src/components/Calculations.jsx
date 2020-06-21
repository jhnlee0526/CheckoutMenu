import React from 'react';

class Calculations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {/* edit this to be the total (depending on the amount of nights) */}
    const basePrice = this.props.rate * 3
    const total = basePrice + this.props.cleaningFee + this.props.serviceFee + this.props.occupancyFee;
    return (
      <div>
        <div>
          <span>
            ${this.props.rate}
          </span>
          <span> x </span>
          <span>
            {/* edit this to be however many nights it is */}
            {3} nights
          </span>
          {/* enter the question mark button  */}
          <span>
            ${basePrice}
          </span>
        </div>
        <div>
          <span>
            Cleaning Fee
          </span>
          <span>
            {/* enter the question mark button  */}
          </span>
          <span>
            {/* edit if we want to change this to be a different amount */}
            ${this.props.cleaningFee}
          </span>
        </div>
        <div>
          <span>
            Service Fee
          </span>
          <span>
            {/* enter the question mark button  */}
          </span>
          <span>
            ${this.props.serviceFee}
          </span>
        </div>
        <div>
          <span>
            Occupancy taxes and fees
          </span>
          <span>
            {/* enter the question mark button  */}
          </span>
          <span>
            ${this.props.occupancyFee}
          </span>
        </div>
        <div>
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    );
  }
}

export default Calculations;