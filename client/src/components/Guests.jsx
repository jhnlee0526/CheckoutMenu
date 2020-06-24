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
  margin: 10px 5px;
  color: #717171;
`;

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Adults', 'Children', 'Infants']
    };
  }

  render() {
    return (
      <div>
        {this.state.list.map((item, i) => (
          <SingleGuest item={item} key={i} adults={this.props.adults} children={this.props.children} infants={this.props.infants} guests={this.props.guests} plusClick={this.props.plusClick} minusClick={this.props.minusClick} />
        ))}
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
