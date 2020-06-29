import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
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
      calculationsData: [{}, {}, {}],
      checkIn: '',
      checkOut: '',
      totalCost: 0,
      resGuestCount: 1,
      adults: 1,
      children: 0,
      infants: 0,
    };
    this.handleNights = this.handleNights.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClearDates = this.handleClearDates.bind(this);
    this.getTotalCost = this.getTotalCost.bind(this);
    this.getGuestCount = this.getGuestCount.bind(this);
    this.getAdultCount = this.getAdultCount.bind(this);
    this.getChildrenCount = this.getChildrenCount.bind(this);
    this.getInfantCount = this.getInfantCount.bind(this);
  }

  componentDidMount() {
    // sending get request for room #3 -- will need to fix this to be whatever room number we go to
    axios.get('http://localhost:3003/api/rooms/3/menu')
      .then(({data}) => {
        console.log('react get request response: ', data);
        this.setState({
          propertyData: data,
        });
        this.setState({
          loading: false,
        });
      })
      .catch((err) => {
        console.log('react get request error: ', err);
      });
  }

  getTotalCost(total) {
    this.setState({
      totalCost: total,
    });
  }

  getGuestCount(guests) {
    this.setState({
      resGuestCount: guests,
    });
  }

  getAdultCount(adults) {
    this.setState({
      adults: adults,
    });
  }

  getChildrenCount(children) {
    this.setState({
      children: children,
    });
  }

  getInfantCount(infants) {
    this.setState({ infants });
  }

  handleClearDates() {
    this.setState({
      calendar: false,
    });
  }

  handleNights(nights, checkIn, checkOut) {
    this.setState({
      nights: nights,
      calendar: true,
      checkIn: checkIn,
      checkOut: checkOut,
      calculationsData: [
        {cleaningFee: (Math.floor(Math.random() * 16) + 5) * 5},
        {serviceFee: Math.floor(this.state.propertyData.nightly_rate * nights * .12)},
        {occupancyFee: Math.floor(this.state.propertyData.nightly_rate * nights * .11)},
      ],
    });
    // this.componentDidMount();
  }

  handleButtonClick() {
    const today = moment().format('YYYY-MM-DD');
    let year = '2020';
    let checkIn = moment(`${this.state.checkIn} ${year}`, 'MMMM DD YYYY').format('YYYY-MM-DD');
    let checkOut = moment(`${this.state.checkOut} ${year}`, 'MMMM DD YYYY').format('YYYY-MM-DD');
    if (checkOut < today) {
      year = '2021';
      checkOut = moment(`${this.state.checkOut} ${year}`, 'MMMM DD YYYY').format('YYYY-MM-DD');
      if (checkIn < today) {
        checkIn = moment(`${this.state.checkIn} ${year}`, 'MMMM DD YYYY').format('YYYY-MM-DD');
      }
    }
    const reservationData = {
      property_id: this.state.propertyData.id,
      check_in: checkIn,
      check_out: checkOut,
      nights: this.state.nights,
      nightly_rate: this.state.propertyData.nightly_rate,
      total_cost: this.state.totalCost,
      guest_count: this.state.resGuestCount,
      adults: this.state.adults,
      children: this.state.children,
      infants: this.state.infants,
    };
    console.log(reservationData);
    axios.post(`http://localhost:3003/api/rooms/${reservationData.property_id}/menu`, reservationData)
      .then((res) => {
        console.log('axios post response: ', res);
      })
      .catch((err) => {
        console.log('axios post error: ', err);
      });
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
      dates = <Calculations rate={this.state.propertyData.nightly_rate} calculationsData={this.state.calculationsData} basePrice={basePrice} nights={this.state.nights} getTotalCost={this.getTotalCost} />;
    }

    return (
      <TotalWrapper>
        <GlobalStyles />
        {loadingPage}
        <DatesGuestsView
          nights={this.state.nights}
          guestsAllowed={this.state.propertyData.total_guests_allowed}
          handleNights={this.handleNights}
          clearPropertyData={this.handleClearDates}
          getGuestCount={this.getGuestCount}
          getAdultCount={this.getAdultCount}
          getChildrenCount={this.getChildrenCount}
          getInfantCount={this.getInfantCount}
          guests={this.state.resGuestCount}
          adults={this.state.adults}
          children={this.state.children}
          infants={this.state.infants}
        />
        {dates}
        <Button onClick={this.handleButtonClick}>{button}</Button>
        <Footer>{msg}</Footer>
      </TotalWrapper>
    );
  }
}

export default App;