import React from 'react';
import styled from 'styled-components';
import Modal from './CalendarModal.jsx';


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
  left: 50%;
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
            <div>CHECK-IN</div>
            <div>Add date</div>
          </CheckInDate>
          <Vertical />
          <CheckOutDate>
            <div>CHECKOUT</div>
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