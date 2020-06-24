import React from 'react';
import styled from 'styled-components';
import Guests from './Guests.jsx';

const Container = styled.div`
  cursor: pointer;
  overflow: hidden;
`;

const Guest = styled.span`
  float: left;
`;

const Arrow = styled.img`
  float: right; 
  width: 20px;
  height: auto;
  cursor: pointer;
  margin: 5px;
`;


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 1,
      dropdown: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
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

  handlePlusClick(e) {
    // change state to add to guests on click -- need to use callback?
    // this.setState(prevState, () => {
    //   guests: this.state.guests + 1
    // });
    this.setState((prevState, props) => ({
      guests: prevState.guests + 1,
    }));
  }

  handleMinusClick(e) {
    // change state to subtract from guests on click -- need to use callback?
    // this.setState(prevState, () => {
    //   guests: this.state.guests - 1
    // });
    this.setState((prevState, props) => ({
      guests: prevState.guests - 1,
    }));
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
      dropdownMenu = <Guests guestsAllowed={this.props.guestsAllowed} guests={this.state.guests} plusClick={this.handlePlusClick} minusClick={this.handleMinusClick} handleClick={this.handleClick} />;
    } else {
      dropdownMenu = '';
    }

    return (
      <div>
        <Container onClick={this.handleClick}>
          <Guest>
            <div>
              GUESTS
            </div>
            <div>
              {this.state.guests} {guests}
            </div>
          </Guest>
          <span>
            <Arrow src="https://img.icons8.com/android/24/000000/expand-arrow.png" />
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