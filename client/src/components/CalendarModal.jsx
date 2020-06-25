import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import SingleCalendar from './SingleCalendar.jsx';

const Modal = styled.div`
  border-radius: 12px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center; 
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  position: fixed;
  padding: 10px;
  cursor: default;
  flex-wrap: wrap;
  width: 350px
  height: 400px;
`;

const Container = styled.div`
  // overflow: hidden;
  justify-content: center;
  display: flex;
  align-items: baseline;
`;

const Keyboard = styled.button`
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  // align-items: baseline;
  justify-content: flex-start;
  border: none;
  background: none;
  :hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
`;

const Clear = styled.button`
  display: flex;
  border-radius: 5px;
  text-align: center;
  // align-items: baseline;
  justify-content: flex-end;
  border: none;
  background: none;
  text-decoration: underline;
  :hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }

`;

const Close = styled.button`
  display: flex;
  border-radius: 4px;
  text-align: center;
  justify-content: flex-start;
  // align-items: baseline;
  border: none;
  padding: 5px 10px;
  background: #222222;
  color: white;
  :hover {
    background-color: #000000;
    cursor: pointer;
  }

`;

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [],
    };
    this.getNextMonths = this.getNextMonths.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.getNextMonths();
  }

  handleClose(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  getNextMonths() {
    const today = new Date();
    const currentMonth = today.getMonth();
    // const currentYear = today.getFullYear();
    const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let upcomingMonths = [];
    for (let i = 0; i < allMonths.length; i++) {
      if (currentMonth === i) {
        upcomingMonths = allMonths.slice(i);
        break;
      }
    }
    if (upcomingMonths.length !== allMonths.length) {
      for (let i = 0; i < allMonths.length; i++) {
        upcomingMonths.push(allMonths[i]);
        if (upcomingMonths.length === allMonths.length) {
          this.setState({months: upcomingMonths});
          break;
        }
      }
    }
    return upcomingMonths;
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <Modal>
          <div>
            {/* add select dates and the checkin/checkout box here */}
          </div>
          <div>
            <SingleCalendar months={this.state.months} />
          </div>
          <div>
            <Container>
              <span>
                <Keyboard>Keeb</Keyboard>
              </span>
              <span>
                <Clear>Clear Dates</Clear>
              </span>
              <span>
                <Close onClick={this.handleClose}>Close</Close>
              </span>
            </Container>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CalendarModal;
