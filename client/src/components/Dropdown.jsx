import React from 'react';
import styled from 'styled-components';
import Guests from './Guests.jsx';

const Container = styled.div`
  cursor: pointer;
  padding: 3px 5px;
  width: 200px;
  height: 27px;
`;

const Guest = styled.span`
  float: left;
  padding: 3px;
`;

const GuestSizing = styled.div`
  font-size: 7px;
  font-weight: 600;
  padding: 1px;
`;

const AllGuestsSizing = styled.div`
  font-size: 9px;
  padding: 1px;
  font-weight: 300;
`;

const DownArrow = styled.img`
  float: right; 
  width: 15px;
  height: auto;
  cursor: pointer;
  margin: 5px;
`;

const UpArrow = styled.img`
  float: right; 
  width: 15px;
  height: auto;
  cursor: pointer;
  margin: 5px;
  transform: rotate(180deg);
`;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: props.guests,
      infants: props.infants,
      dropdown: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.handleGuestPlusClick = this.handleGuestPlusClick.bind(this);
    this.handleGuestMinusClick = this.handleGuestMinusClick.bind(this);
    this.handleInfantPlusClick = this.handleInfantPlusClick.bind(this);
    this.handleInfantMinusClick = this.handleInfantMinusClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.showDropdown(e);
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState({
      dropdown: !this.state.dropdown,
    });
  }

  handleGuestPlusClick(e) {
    this.setState((prevState, props) => ({
      guests: prevState.guests + 1,
    }));
    this.props.getGuestCount(this.state.guests + 1);
  }

  handleGuestMinusClick(e) {
    this.setState((prevState, props) => ({
      guests: prevState.guests - 1,
    }));
    this.props.getGuestCount(this.state.guests - 1);
  }

  handleInfantPlusClick(e) {
    this.setState((prevState, props) => ({
      infants: prevState.infants + 1,
    }));
    this.props.getInfantCount(this.state.infants + 1);
  }

  handleInfantMinusClick(e) {
    this.setState((prevState, props) => ({
      infants: prevState.infants - 1,
    }));
    this.props.getInfantCount(this.state.infants - 1);
  }

  render() {
    let guests;
    if (this.state.guests === 1) {
      guests = 'guest';
    } else {
      guests = 'guests';
    }
    let dropdownMenu;
    if (this.state.dropdown) {
      dropdownMenu = (
        <Guests
          guestsAllowed={this.props.guestsAllowed}
          guests={this.state.guests}
          infants={this.state.infants}
          guestPlusClick={this.handleGuestPlusClick}
          guestMinusClick={this.handleGuestMinusClick}
          infantPlusClick={this.handleInfantPlusClick}
          infantMinusClick={this.handleInfantMinusClick}
          handleClick={this.handleClick}
          getAdultCount={this.props.getAdultCount}
          getChildrenCount={this.props.getChildrenCount}
          // guests={this.props.guests}
          adults={this.props.adults}
          children={this.props.children}
          // infants={this.props.infants}
        />
      );
    } else {
      dropdownMenu = '';
    }
    let arrowDirection;
    if (this.state.dropdown) {
      arrowDirection = <UpArrow src="https://img.icons8.com/android/24/000000/expand-arrow.png" />;
    } else {
      arrowDirection = <DownArrow src="https://img.icons8.com/android/24/000000/expand-arrow.png" />;
    }
    let totalInfants;
    if (this.state.infants === 1) {
      totalInfants = `, ${this.state.infants} infant`;
    } else if (this.state.infants > 1) {
      totalInfants = `, ${this.state.infants} infants`;
    }

    return (
      <div>
        <Container onClick={this.handleClick}>
          <Guest>
            <GuestSizing>
              GUESTS
            </GuestSizing>
            <AllGuestsSizing>
              <span>
                {this.state.guests} {guests}
              </span>
              <span>
                {totalInfants}
              </span>
            </AllGuestsSizing>
          </Guest>
          <span>
            {arrowDirection}
          </span>
        </Container>
        <div>
          {dropdownMenu}
        </div>
      </div>
    );
  }
}

export default Dropdown;