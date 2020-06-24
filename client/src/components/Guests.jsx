import React from 'react';
import styled from 'styled-components';
import SingleGuest from './SingleGuest.jsx';

const CloseButton = styled.button`
  border-radius: 6px;
  border: none;
  background: none;
  padding: 6px;
  float: right;
  text-decoration: underline;
  :hover {
    background-color: #f7f7f7;
  }
`;

const Msg = styled.div`
  color: #717171;
`;

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <SingleGuest guests={this.props.guests} plusClick={this.props.plusClick} minusClick={this.props.minusClick} />
        <Msg>
          {this.props.guestsAllowed} guests maximum. Infants don't count toward the number of guests.
        </Msg>
        <div>
          <CloseButton onClick={this.props.handleClick}>Close</CloseButton>
        </div>
      </div>
    );
  }
}

export default Guests;
