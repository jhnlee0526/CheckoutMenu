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
      checkIn: '',
      checkOut: '',
    };
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  handleCheckIn(date) {
    this.setState({
      checkIn: date,
    });
  }

  handleCheckOut(date) {
    this.setState({
      checkOut: date,
    });
  }

  render() {
    return (
      <Container>
        <DatesView
          nights={this.props.nights}
          checkIn={this.state.checkIn}
          checkOut={this.state.checkOut}
          checkInDate={this.handleCheckIn}
          checkOutDate={this.handleCheckOut}
          handleNights={this.props.handleNights}
          clearPropertyData={this.props.clearPropertyData}
        />
        <Line />
        <Guests>
          <Dropdown
            guestsAllowed={this.props.guestsAllowed}
            getGuestCount={this.props.getGuestCount}
            getAdultCount={this.props.getAdultCount}
            getChildrenCount={this.props.getChildrenCount}
            getInfantCount={this.props.getInfantCount}
            guests={this.props.guests}
            adults={this.props.adults}
            children={this.props.children}
            infants={this.props.infants}
          />
        </Guests>
      </Container>
    );
  }
}

export default DatesGuestsView;
