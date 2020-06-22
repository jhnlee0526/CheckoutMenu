import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Calculations from './Calculations.jsx';
import Loading from './Loading.jsx';
import PropertyData from './PropertyData.jsx';
import Calendar from './Calendar.jsx';

const Button = styled.button`
  background-color: #ff385c;
  color: white;
  text-align: center;
  font: "Helvetica Neue", sans-serif;
  border-radius: 5px;
  border: none;
  padding: 8.5px 30px;
  font-size: 70%;
  margin: 5px 0;
  width: 100%;
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
      <div>
        <div>
          {loadingPage}
        </div>
        <div>
          {/* checkin/checkout/guets component go here */}
          <Calendar nights={this.state.nights} />
        </div>
        <div>
          {dates}
        </div>
        <Button>{button}</Button>
        <div>{msg}</div>
      </div>
    );
  }
}

export default App;
