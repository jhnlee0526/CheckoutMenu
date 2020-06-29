import React from 'react';
import styled from 'styled-components';
import Modal from './CalendarModal.jsx';

const CheckInDate = styled.div`
  padding: 8px;
  display: inline-block;
  text-align: left;
  float: left;
  width: 88px;
  font-size: 10px;
  border-right: .5px solid #717171;
`;

//on hover, it will be black
const CheckOutDate = styled.div`
  padding: 8px;
  display: inline-block;
  text-align: left;
  float: right;
  width: 88px;
  // margin: 5px;
  font-size: 10px;
`;

const CheckInCheckOut = styled.div`
  font-size: 7px;
  font-weight: 600;
  padding: 1px;
`;

const DateAddDate = styled.div`
  font-size: 9px;
  font-weight: 300;
  padding: 1px;
`;

class DatesView extends React.Component {
  constructor(props) {
    super(props);
    // props are checkIn, checkOut, and nights
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleClick() {
    this.setState({
      show: true,
    });
  }

  showModal() {
    this.setState({
      show: false,
    });
  }

  render() {
    let modalCheckIn = 'Add date';
    let modalCheckOut = 'Add date';
    if (this.props.checkOut) {
      modalCheckIn = this.props.checkIn;
      modalCheckOut = this.props.checkOut;
    }
    return (
      <div>
        <div onClick={this.handleClick}>
          <CheckInDate>
            <CheckInCheckOut>CHECK-IN</CheckInCheckOut>
            <DateAddDate>{modalCheckIn}</DateAddDate>
          </CheckInDate>
          <CheckOutDate>
            <CheckInCheckOut>CHECKOUT</CheckInCheckOut>
            <DateAddDate>{modalCheckOut}</DateAddDate>
          </CheckOutDate>
        </div>
        <div>
          <Modal
            onClick={this.showModal}
            show={this.state.show}
            nights={this.props.nights}
            checkIn={this.props.checkIn}
            checkOut={this.props.checkOut}
            checkInDate={this.props.checkInDate}
            checkOutDate={this.props.checkOutDate}
            handleNights={this.props.handleNights}
            clearPropertyData={this.props.clearPropertyData}
          />
        </div>
      </div>
    );
  }
}

export default DatesView;