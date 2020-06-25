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
    font-family: Roboto, sans-serif;
  }
`;

const TotalWrapper = styled.div`
  border-radius: 10px;
  border: none;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
  width: 350px;
  height: 400px;
  padding: 15px;
`;

// dimensions I want if no there aren't dates selected/no pricing data:
const Wrapper = styled.div`
  border-radius: 10px;
  border: none;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
  width: 350px;
  height: 215px;
  padding: 15px;
`;

const Button = styled.button`
  // on hover, change to: ??
  background-color: #ff385c;
  color: white;
  text-align: center;
  font: "Helvetica Neue", sans-serif;
  border-radius: 5px;
  border: none;
  padding: 12px 30px;
  // font-size: 70%;
  letter-spacing: .5px;
  margin: 15px 5px;
  width: 340px;
  cursor: pointer;
  // possibility if we do gradient?
  // background: linear-gradient(#E61E4D 0%, #E31C5F 50%, #D70466 100%)
`;

const Footer = styled.div`
  font: "Helvetica Neue", sans-serif;
  text-align: center;
  font-size: 10px;
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
    };
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
            {serviceFee: Math.floor(data.nightly_rate * 3 * .12)},
            // edit this depending on the amount of nights -- avg it to be 11%
            {occupancyFee: Math.floor(data.nightly_rate * 3 * .11)},
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
      const basePrice = this.state.propertyData.nightly_rate * 3;
      dates = <Calculations rate={this.state.propertyData.nightly_rate} calculationsData={this.state.calculationsData} basePrice={basePrice} />;
    }

    return (
      <TotalWrapper>
        <GlobalStyles />
        <div>
          {loadingPage}
        </div>
        <div>
          {/* checkin/checkout/guets component go here */}
          <DatesGuestsView
            nights={this.state.nights}
            guestsAllowed={this.state.propertyData.total_guests_allowed}
          />
        </div>
        <div>
          {dates}
        </div>
        <Button>{button}</Button>
        <Footer>{msg}</Footer>
      </TotalWrapper>
    );
  }
}

export default App;
