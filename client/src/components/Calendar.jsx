import React from 'react';
import styled from 'styled-components';
import Modal from './CalendarModal.jsx';

const Container = styled.div`
  border-radius: 5px;
  border: .5px solid #717171;
  margin: 5px;
  cursor: pointer;
  overflow: hidden;
`;

const CheckInDate = styled.div`
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  text-align: left;
  float: left;
  width: 40%;
  margin: 5px;
`;
//on hover, it will be black

const Vertical = styled.div`
  border-left: 1px solid #717171;
  height: 10%;
  position: absolute;
  left: 50%
`;

const CheckOutDate = styled.div`
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  text-align: left;
  float: right;
  width: 40%;
  margin: 5px;
`;

//props is nights, lift that back up once we figure out the nights
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: 0,
      checkOut: 0,
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    //bring up calendar modal
    this.showModal();
  }

  showModal(e) {
    this.setState({
      show: true,
    });
  }

  render() {
    return (
      <Container onClick={this.handleClick}>
        <CheckInDate>
            <div>CHECK-IN</div>
            <div>Add date</div>
        </CheckInDate>
        <Vertical />
        <CheckOutDate>
          <div>CHECKOUT</div>
          <div>Add date</div>
        </CheckOutDate>
        <Modal show={this.state.show} />
      </Container>
    );
  }
}

export default Calendar