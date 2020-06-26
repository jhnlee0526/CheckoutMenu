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
`;

class DatesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      show: true,
    });
  }

  showModal(e) {
    e.preventDefault();
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          <CheckInDate>
            <CheckInCheckOut>CHECK-IN</CheckInCheckOut>
            <div>Add date</div>
          </CheckInDate>
          <CheckOutDate>
            <CheckInCheckOut>CHECKOUT</CheckInCheckOut>
            <div>Add date</div>
          </CheckOutDate>
        </div>
        <div>
          <Modal onClick={this.showModal} show={this.state.show} />
        </div>
      </div>
    );
  }
}

export default DatesView;