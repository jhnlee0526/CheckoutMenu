import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown.jsx';
import DatesView from './CheckInCheckOut.jsx';

const Container = styled.div`
  border-radius: 8px;
  border: .5px solid #717171;
  margin: 15px 3px;
  cursor: pointer;
  overflow: hidden;
  width: 209px;
  height: 75px;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: .5px solid #717171;
  overflow: hidden;
`;

const Guests = styled.div`
  display: inline-block;
  text-align: left;
  margin: 0;
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
        <DatesView
          nights={this.props.nights}
          checkIn={this.state.checkIn}
          checkOut={this.state.checkOut}
        />
        <Line />
        <Guests>
          <Dropdown guestsAllowed={this.props.guestsAllowed} />
        </Guests>
      </Container>
    );
  }
}

export default DatesGuestsView;
