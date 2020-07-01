/* eslint-disable no-plusplus */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import SingleCalendar from './SingleCalendar.jsx';

const Modal = styled.div`
  border-radius: 12px;
  background: white;
  // position: fixed;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  padding: 10px 15px;
  cursor: default;
  flex-wrap: wrap;
  width: 425px;
  // max-width: 100%;
  height: 310px;
  // max-height: 100%;
  right: 0px;
  // right: 35%;
  z-index: 100;
`;

const Container = styled.div`
  display: block;
  width: 425px;
  padding: 5px;
`;

const SelectContainer = styled.span`
  float: left;
  margin-right: 20px;
`;

const CheckContainer = styled.span`
  float: right;
  margin-left: 20px;
  border: .5px solid #717171;
  border-radius: 8px;
  font-size: 8px;
`;

// on click, or when it is that component, it will have the border be black
const CheckInDate = styled.div`
  border-radius: 5px;
  // border: 1px solid black;
  padding: 8px;
  display: inline-block;
  text-align: left;
  float: left;
  width: 65px;
  height: 20px;
`;

// on click, or when it is that component, it will have the border be black
const CheckOutDate = styled.div`
  border-radius: 5px;
  // border: 1px solid black;
  padding: 8px;
  display: inline-block;
  text-align: left;
  float: right;
  width: 65px;
  height: 20px;
`;

const SelectDiv = styled.div`
  margin-bottom: 3px;
  font-weight: 500;
  font-size: 16px;
`;

const NightDiv = styled.div`
  margin-top: 3px;
  font-size: 10px;
  color: #717171
`;

const Keyboard = styled.button`
  display: flex;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 5px;
  float: left;
  border: none;
  background: none;
  :hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
`;

const Clear = styled.button`
  border-radius: 4px;
  padding: 5px 10px;
  border: none;
  margin: 5px;
  font-size: 10px;
  background: none;
  text-decoration: underline;
  :hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
`;

const Close = styled.button`
  border-radius: 4px;
  font-size: 10px;
  border: none;
  padding: 5px 10px;
  background: #222222;
  color: white;
  :hover {
    background-color: #000000;
    cursor: pointer;
  }
`;

const CheckInCheckOut = styled.div`
  font-size: 7px;
  font-weight: 600;
  padding: 1px;
`;

const DateAddDate = styled.div`
  font-size: 8px;
  padding: 1px;
  font-weight: 300;
`;

const Keeb = styled.img`
  width: 15px;
  height: auto;
  padding: 3px;
`;

const KeebSpan = styled.span`
  float: left;
  // justify-content:
`;

const ClearClose = styled.span`
  float: right;
`;

class CalendarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [],
      checkInDate: '',
      checkOutDate: '',
      nights: 0,
    };
    this.getNextMonths = this.getNextMonths.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCheckInDate = this.handleCheckInDate.bind(this);
    this.handleCheckOutDate = this.handleCheckOutDate.bind(this);
    this.getNumberOfNights = this.getNumberOfNights.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    this.getNextMonths();
  }

  handleClose(param) {
    this.props.onClick();
    if (!this.state.checkOutDate && param !== undefined) {
      this.handleClear();
    }
  }

  handleCheckInDate(date) {
    const currentDate = moment(date).format('MMMM DD');
    this.setState({
      checkInDate: date,
    });
    this.props.checkInDate(currentDate);
    if (this.state.checkOutDate) {
      console.log(this.state.checkOutDate);
      this.setState({
        checkOutDate: '',
      });
    }
  }

  handleCheckOutDate(date) {
    const currentDate = moment(date).format('MMMM DD');
    this.setState({
      checkOutDate: date,
    });
    this.props.checkOutDate(currentDate);
    this.getNumberOfNights(date);
    this.handleClose();
  }

  getNumberOfNights(checkOutDate) {
    const endDate = moment(checkOutDate);
    const startDate = moment(this.state.checkInDate);
    const nights = endDate.diff(startDate, 'days');
    this.setState({
      nights,
    });
    this.props.handleNights(nights, this.state.checkInDate, checkOutDate);
  }

  handleClear() {
    this.setState({
      checkInDate: '',
      checkOutDate: '',
    });
    this.props.checkInDate('');
    this.props.checkOutDate('');
    this.props.clearPropertyData();
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
          this.setState({ months: upcomingMonths });
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
    let currentCheckIn = 'Add date';
    if (this.state.checkInDate) {
      currentCheckIn = this.state.checkInDate.slice(0, -5);
    }
    let currentCheckOut = 'Add date';
    let selectDates = 'Select Dates';
    let currentNights = 'Add your travel dates for exact pricing';
    if (this.state.checkOutDate) {
      currentCheckOut = this.state.checkOutDate.slice(0, -5);
      selectDates = `${this.state.nights} night(s)`;
      currentNights = `${this.state.checkInDate} - ${this.state.checkOutDate}`;
    }
    const dateBorder = {
      border: '1px solid black',
    };
    let checkInBox;
    let checkOutBox;
    if (!this.state.checkInDate) {
      checkInBox = (
        <CheckInDate style={dateBorder}>
          <CheckInCheckOut>CHECK-IN</CheckInCheckOut>
          <DateAddDate>{currentCheckIn}</DateAddDate>
        </CheckInDate>
      );
      checkOutBox = (
        <CheckOutDate>
          <CheckInCheckOut>CHECKOUT</CheckInCheckOut>
          <DateAddDate>{currentCheckOut}</DateAddDate>
        </CheckOutDate>
      );
    } else {
      checkInBox = (
        <CheckInDate>
          <CheckInCheckOut>CHECK-IN</CheckInCheckOut>
          <DateAddDate>{currentCheckIn}</DateAddDate>
        </CheckInDate>
      );
      checkOutBox = (
        <CheckOutDate style={dateBorder}>
          <CheckInCheckOut>CHECKOUT</CheckInCheckOut>
          <DateAddDate>{currentCheckOut}</DateAddDate>
        </CheckOutDate>
      );
    }
    return (
      <div>
        <Modal>
          <Container>
            {/* this will need to be changed to the amount of nights and the dates later... */}
            <SelectContainer>
              <SelectDiv>{selectDates}</SelectDiv>
              <NightDiv>{currentNights}</NightDiv>
            </SelectContainer>
            <CheckContainer>
              <div>
                {checkInBox}
                {checkOutBox}
              </div>
            </CheckContainer>
          </Container>
          <Container>
            <SingleCalendar
              months={this.state.months}
              nights={this.props.nights}
              checkIn={this.state.checkInDate}
              checkOut={this.state.checkOutDate}
              handleCheckIn={this.handleCheckInDate}
              handleCheckOut={this.handleCheckOutDate}
              clearPropertyData={this.props.clearPropertyData}
            />
          </Container>
          <Container>
            <KeebSpan>
              <Keyboard><Keeb src="https://img.icons8.com/small/32/000000/keyboard.png" /></Keyboard>
            </KeebSpan>
            <ClearClose>
              <Close onClick={this.handleClose}>Close</Close>
            </ClearClose>
            <ClearClose>
              <Clear onClick={this.handleClear}>Clear Dates</Clear>
            </ClearClose>
          </Container>
        </Modal>
      </div>
    );
  }
}

export default CalendarModal;
