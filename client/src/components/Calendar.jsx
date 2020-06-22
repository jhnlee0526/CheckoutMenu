import React from 'react';
import styled from 'styled-components';
import Modal from './CalendarModal.jsx';

const Container = styled.div`
  border-radius: 5px;
  border: .5px solid #717171;
  margin: 5px 0;
  text-align: center;
  cursor: pointer;
`;

const Dates = styled.div`
  border-radius: 5px;
  // border: .5px solid #717171;
  padding: 5px;
  display: inline-block;
`;
//on hover, it will be black


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
    console.log('hello');
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
        <Dates>
            <div>CHECK-IN</div>
            <div>Add date</div>
        </Dates>
        <Dates>
          <div>CHECKOUT</div>
          <div>Add date</div>
        </Dates>
        <Modal show={this.state.show} />
      </Container>
    );
  }
}

export default Calendar