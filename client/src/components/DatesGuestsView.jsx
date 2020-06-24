import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown.jsx';
import DatesView from './CheckInCheckOut.jsx';

const Container = styled.div`
  border-radius: 8px;
  border: .5px solid #717171;
  margin: 5px;
  cursor: pointer;
  overflow: hidden;
`;

const Line = styled.div`
  width: 100%;
  margin: 15px 5px 5px 5px;
  border-bottom: 1px solid #717171;
  overflow: hidden;
`;

const Guests = styled.div`
  padding: 10px;
  display: inline-block;
  text-align: left;
  width: 95%;
  margin: 0 5px;
`;

//props is nights, lift that back up once we figure out the nights
class DatesGuestsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: 0,
      checkOut: 0,
    };
  }

  render() {
    return (
      <Container>
        <DatesView nights={this.props.nights} checkIn={this.state.checkIn} checkOut={this.state.checkOut} />
        <Line />
        <Guests>
          <Dropdown guestsAllowed={this.props.guestsAllowed} />
        </Guests>
      </Container>
    );
  }
}

export default DatesGuestsView;
