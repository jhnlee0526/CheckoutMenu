import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import Calculations from './Calculations.jsx';
import Loading from './Loading.jsx';
import PropertyData from './PropertyData.jsx';
import DatesGuestsView from './DatesGuestsView.jsx';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Montserrat, sans-serif;
  }
`;

const TotalWrapper = styled.div`
  border-radius: 10px;
  border: none;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
  width: 215px;
  height: 315px;
  padding: 10px;
  font-size: 12px;
  // display: flex;
  // justify-content: center;
  margin: auto;
`;

// dimensions I want if no there aren't dates selected/no pricing data:
// const Wrapper = styled.div`
//   border-radius: 10px;
//   border: none;
//   background: white;
//   box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
//   width: 215px;
//   height: 260px;
//   padding: 15px;
//   font-size: 12px;
// `;

const Button = styled.button`
  // on hover, change to: ??
  // background-color: #ff385c;
  color: white;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  border: none;
  font-size: 10px;
  letter-spacing: .5px;
  margin: 15px 5px 10px 5px;
  width: 205px;
  height: 35px;
  cursor: pointer;
  background: linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)
`;

const Footer = styled.div`
  text-align: center;
  font-size: 8px;
  letter-spacing: .2px;
  color: #222222;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      propertyData: {},
      calendar: false,
      nights: 0,
      dropDown: 0,
      calculationsData: [{}, {}, {}],
      checkIn: '',
      checkOut: '',
    };
    this.handleNights = this.handleNights.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    // sending get request for room #3 -- will need to fix this to be whatever room number we go to
    axios.get('http://localhost:3003/api/rooms/3/menu')
      .then(({data}) => {
        console.log('react get request response: ', data);
        this.setState({
          propertyData: data,
          calculationsData: [
            {cleaningFee: (Math.floor(Math.random() * 16) + 5) * 5},
            // edit this depending on the amount of nights -- avg it to be 12%;
            {serviceFee: Math.floor(data.nightly_rate * this.state.nights * .12)},
            // edit this depending on the amount of nights -- avg it to be 11%
            {occupancyFee: Math.floor(data.nightly_rate * this.state.nights * .11)},
          ],
        });
        this.setState({
          loading: false,
          // calendar: true,
        });
      })
      .catch((err) => {
        console.log('react get request error: ', err);
      });
  }

  handleNights(nights, checkIn, checkOut) {
    this.setState({
      nights: nights,
      calendar: true,
      checkIn: checkIn,
      checkOut: checkOut,
    });
    this.componentDidMount();
  }

  handleButtonClick() {
    console.log(this.state.nights);
    console.log(this.state.checkIn);
    console.log(this.state.checkOut);
  }

  render() {
    let loadingPage;
    let button = '...';
    let msg = '';
    if (this.state.loading) {
      loadingPage = <Loading />;
    } else {
      loadingPage = <PropertyData data={this.state.propertyData} />;
      button = 'Reserve';
      msg = 'You won\'t be charged yet';
    }

    let dates;
    if (!this.state.calendar) {
      // show nothing if dates are not selected
      dates = '';
      button = 'Check availability';
      msg = '';
    } else {
      // base price will change based on the amount of nights
      const basePrice = this.state.propertyData.nightly_rate * this.state.nights;
      dates = <Calculations rate={this.state.propertyData.nightly_rate} calculationsData={this.state.calculationsData} basePrice={basePrice} nights={this.state.nights} />;
    }

    return (
      <TotalWrapper>
        <GlobalStyles />
        {loadingPage}
        <DatesGuestsView
          nights={this.state.nights}
          guestsAllowed={this.state.propertyData.total_guests_allowed}
          handleNights={this.handleNights}
          checkIn={this.state.checkIn}
          checkOut={this.state.checkOut}
        />
        {dates}
        <Button onClick={this.handleButtonClick}>{button}</Button>
        <Footer>{msg}</Footer>
      </TotalWrapper>
    );
  }
}

export default App;