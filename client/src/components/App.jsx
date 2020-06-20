import React from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3003/api/rooms/:property_id/menu')
      .then(({data}) => {
        console.log('react get request response: ', data);
        this.setState({data});
      })
      .catch((err) => {
        console.log('react get request error: ', err);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>test</h2>
        <div>{JSON.stringify(data[0])}</div>
      </div>
    );
  }
}

export default App;
