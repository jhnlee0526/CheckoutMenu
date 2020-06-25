import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 50%;
  width: 23px;
  height: 23px;
  text-align: center;
  align-items: center;
  background: none;
  border: .5px solid #b0b0b0;
  font-size: 16px;
  padding: 2px;
  margin: 5px;
  cursor: pointer;
  color: #717171;
  :focus {
    outline:0;
  }
`;

const EachGuest = styled.div`
  padding: 12px 5px;
  font-size: 12px;
`;

const Msg = styled.div`
  font-size: 10px;
  cursor: text;
`;

const Category = styled.div`
  display: inline-block;
`;

const Buttons = styled.div`
  display: inline-block;
  float: right;
  text-align: center;
`;

const Count = styled.span`
  margin: 5px;
  cursor: text;
`;

const TransparentButton = styled.button`
  border-radius: 50%;
  width: 23px;
  height: 23px;
  text-align: center;
  align-items: center;
  background: none;
  border: .5px solid #b0b0b0;
  font-size: 16px;
  padding: 2px;
  margin: 5px;
  color: #717171;
  opacity: 0.3;
  cursor: no-drop;
  :focus {
    outline:0;
  }
`;

const Item = styled.div`
  cursor: text;
`;

class SingleGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  handlePlusClick(e) {
    if (this.props.item === 'Adults') {
      this.setState((prevState, props) => ({
        adults: prevState.adults + 1,
      }));
      this.props.guestPlusClick();
    } else if (this.props.item === 'Children') {
      this.setState((prevState, props) => ({
        children: prevState.children + 1,
      }));
      this.props.guestPlusClick();
    } else if (this.props.item === 'Infants') {
      this.setState((prevState, props) => ({
        infants: prevState.infants + 1,
      }));
      this.props.infantPlusClick();
    }
  }

  handleMinusClick(e) {
    if (this.props.item === 'Adults') {
      this.setState((prevState, props) => ({
        adults: prevState.adults - 1,
      }));
      this.props.guestMinusClick();
    } else if (this.props.item === 'Children') {
      this.setState((prevState, props) => ({
        children: prevState.children - 1,
      }));
      this.props.guestMinusClick();
    } else if (this.props.item === 'Infants') {
      this.setState((prevState, props) => ({
        infants: prevState.infants - 1,
      }));
      this.props.infantMinusClick();
    }
  }

  render() {
    let currentGuestCount;
    let msg = '';
    if (this.props.item === 'Adults') {
      currentGuestCount = this.state.adults;
    } else if (this.props.item === 'Children') {
      currentGuestCount = this.state.children;
      msg = 'Ages 2-12';
    } else {
      currentGuestCount = this.state.infants;
      msg = 'Under 2';
    }
    let currentMinusButton;
    if (currentGuestCount === 0 || (this.props.item === 'Adults' && currentGuestCount === 1)) {
      currentMinusButton = <TransparentButton onClick={this.handleMinusClick}>-</TransparentButton>;
    } else {
      currentMinusButton = <Button onClick={this.handleMinusClick}>-</Button>;
    }
    let currentPlusButton;
    if (this.props.guests === this.props.guestsAllowed) {
      currentPlusButton = <TransparentButton onClick={this.handlePlusClick}>+</TransparentButton>;
    } else {
      currentPlusButton = <Button onClick={this.handlePlusClick}>+</Button>;
    }
    

    return (
      <EachGuest>
        <Category>
          <Item>
            {this.props.item}
          </Item>
          <Msg>
            {msg}
          </Msg>
        </Category>
        <Buttons>
          <span>
            {currentMinusButton}
          </span>
          <Count>
            {currentGuestCount}
          </Count>
          <span>
            {currentPlusButton}
          </span>
        </Buttons>
      </EachGuest>
    );
  }
};

export default SingleGuest;
