import React from 'react';
import moment from 'moment';
import CalendarMonth from './CalendarMonth.jsx';

const calendarKeys = {January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7, August: 8, September: 9, October: 10, November: 11, December: 12};

class SingleCalendar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentDate: moment(),
      currentMonth: 0,
      allMonths: [],
      start: 0,
      end: 2,
      previous: false,
      next: true,
    };
    this.currentDay = this.currentDay.bind(this);
    this.getDaysInMonth = this.getDaysInMonth.bind(this);
    this.getFirstDay = this.getFirstDay.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
  }

  componentDidMount() {
    // month is 0 based, so add one to get the current month
    const today = new Date();
    this.setState({
      currentMonth: today.getMonth() + 1,
    });
  }

  getDaysInMonth(month, year) {
    let days = moment(`${year}-${month}`, "YYYY-MMMM").daysInMonth();
    return days;
  }

  getFirstDay(month, year) {   
    let first = moment(`${year}-${month}`, 'YYYY-MMMM').startOf("month").format("d");
    return first;
  }

  currentDay() {
    return moment().format("D");
  }

  handleNextClick(e) {
    // e.preventDefault();
    // on click, set state to be next
    let oldStart = this.state.start;
    let oldEnd = this.state.end;
    this.setState({
      start: oldStart + 1,
      end: oldEnd + 1,
    });
    if (!this.state.previous) {
      this.setState({
        previous: true,
      });
    }
    if (this.state.end === 12) {
      this.setState({
        next: false,
      });
    }
  }

  handlePreviousClick(e) {
    // e.preventDefault();
    // on click, set state to be previous
    let oldStart = this.state.start;
    let oldEnd = this.state.end;
    this.setState({
      start: oldStart - 1,
      end: oldEnd - 1,
    });
    if (!this.state.next) {
      this.setState({
        next: true,
      });
    }
    if (this.state.start === 0) {
      this.setState({
        previous: false,
      });
    }
  }

  render() {
    const today = new Date();
    let currentYear = today.getFullYear();
    let calendarMonth = [];
    let monthsAndYear = [];
    // console.log('MONTH: ', this.state.currentMonth);

    for (let i = 0; i < this.props.months.length; i++) {
      let eachMonth = this.props.months[i];

      if (eachMonth === 'January' && this.props.months[0] !== 'January') {
        currentYear++;
      }

      let blanks = [];
      for (let i = 0; i < this.getFirstDay(eachMonth, currentYear); i++) {
        blanks.push(
          <td className="empty calendar-day">{""}</td>,
        );
      }

      let allDaysInMonth = [];
      for (let d = 1; d <= this.getDaysInMonth(eachMonth, currentYear); d++) {
        let current = d == this.currentDay() ? "today" : "";
        allDaysInMonth.push(
          <td className={`calendar-day ${current}`}>{d}</td>,
        );
      }

      let totalSlots = [...blanks, ...allDaysInMonth];
      let rows = [];
      let cells = [];
      totalSlots.forEach((row, column) => {
        if (column % 7 !== 0) {
          cells.push(row);
        } else {
          rows.push(cells);
          cells = [];
          cells.push(row);
        }
        if (column === totalSlots.length - 1) {
          rows.push(cells);
        }
      });
      calendarMonth.push(rows.map((d, i) => (<tr>{d}</tr>)));
      monthsAndYear.push(`${eachMonth} ${currentYear}`);
    }
    // console.log('monthsAndYear', monthsAndYear);
    //once next is clicked, change to 1, 3. 
    let displayedCals = calendarMonth.slice(this.state.start, this.state.end);
    let displayedMonths = monthsAndYear.slice(this.state.start, this.state.end);
    return (
      <div>
        <CalendarMonth calendar={displayedCals} month={displayedMonths} />
      </div>
    );
  }
}
export default SingleCalendar;