import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CourseCard from './CourseCard';
import SearchBox from './SearchBox';

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
        <span class="long">{props.day}</span>
      </th>);
    }

    function Cell(props) {
      return <li class="cell" id={props.day + props.hour}></li>;
    }

    function Hour(props) {
      var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      return <ul id={props.hour}>
        <li> {props.hour} </li>
        {weekday.map((day) => <Cell day={day} hour={props.hour} />)}
      </ul>
    }

    return (<div class="calendar">
      <div class="c_body">
        <div class="lightgrey body-list">
          <ul class="week_header">
            <li> </li>
            <li>MON</li>
            <li>TUE</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
          </ul>
        </div>
        <div class="darkgrey body-list">
          {this.hour.map((hour) => <Hour hour={hour} />)}
        </div>
      </div>
    </div>)
  }
}











