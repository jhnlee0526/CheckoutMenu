import React from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';
import Calculations from './Calculations.jsx';
import Loading from './Loading.jsx';
import PropertyData from './PropertyData.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      propertyData: {},
      calendar: 0,
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
            {serviceFee: Math.floor(data[0].nightly_rate * 3 * .12)},
            // edit this depending on the amount of nights -- avg it to be 11%
            {occupancyFee: Math.floor(data[0].nightly_rate * 3 * .11)}
          ],
          loading: false,
        });
      })
      .catch((err) => {
        console.log('react get request error: ', err);
      });
  }

  render() {
    let loadingPage;
    if (this.state.loading) {
      loadingPage = <Loading />;
    } else {
      loadingPage = <PropertyData />;
    }
    return (
      <div>
        <h2>hello</h2>
        {/* <div>{JSON.stringify(data)}</div> */}
        <div>
          {/* checkin/checkout/guets component go here */}
        </div>
        <div>
          <Calculations rate={this.state.propertyData.nightly_Rate} calculationsData={this.state.calculationsData} />
        </div>
      </div>
    );
  }
}

export default App;
