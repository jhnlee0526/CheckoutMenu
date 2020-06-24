import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import SingleCalendar from './SingleCalendar.jsx';

const Modal = styled.div`
  className: "modal";
  background: pink;
`;

const Container = styled.div`
  // overflow: hidden;
`;

const Keyboard = styled.button`
  display: inline-block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  float: left;
`;

const Close = styled.button`
  display: inline-block;
  border-radius: 5px;
  text-align: center;
  float: right;
`;

const Clear = styled.button`
  display: inline-block;
  border-radius: 5px;
  text-align: center;
  float: right;
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
      <Modal>
        <SingleCalendar months={this.state.months} />
        <div>
          <span>
            <Keyboard>Keeb</Keyboard>
          </span>
          <span>
            <Clear>Clear Dates</Clear>
          </span>
          <span>
            <Close onClick={this.handleClose}>Close</Close>
          </span>
        </div>
      </Modal>
    );
  }
}

export default CalendarModal;