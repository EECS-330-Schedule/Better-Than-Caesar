import React from 'react';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    this.hour = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
      "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  }

  render() {
    function Day(props) {
      return (<th>
        <span className="long">{props.day}</span>
      </th>);
    }

    function Cell(props) {
      return <li className="cell" id={props.day + props.hour}></li>;
    }

    function Hour(props) {
      var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      return <ul id={props.hour}>
        <li> {props.hour} </li>
        {weekday.map((day) => <Cell key={props.hour + day} day={day} hour={props.hour} />)}
      </ul>
    }

    return (<div className="calendar">
      <div className="c_body">
        <div className="lightgrey body-list">
          <ul className="week_header">
            <li> </li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
          </ul>
        </div>
        <div className="darkgrey body-list">
          {this.hour.map((hour) => <Hour key={hour} hour={hour} />)}
        </div>
      </div>
    </div>)

  }
}