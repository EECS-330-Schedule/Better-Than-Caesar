import React from 'react';

const Calendar = props => {
  // props.enrolled: ['cs330','cs336']
  // props.courseList: json object of course.json
  
  const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hour = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

  const Day = props => {
    return (<th>
      <span className="long">{props.day}</span>
    </th>);
  }

  const Cell= props => {
    return <li className="cell" id={props.day + props.hour}></li>;
  }

  const Hour = props => {
    return <ul id={props.hour}>
      <li> {props.hour} </li>
      {weekday.map((day) => <Cell key={props.hour + day} day={day} hour={props.hour} />)}
    </ul>
  }

  return (
  <div className="calendar">
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
        {hour.map((hour) => <Hour key={hour} hour={hour} />)}
      </div>
    </div>
  </div>)
}

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}

const GetCell = (day, time) => {
  return document.getElementById(day + time);
}

const AddEvent = (course_info, day, time, length, offset) => {
  let cell = GetCell(day, time)

  if (cell) {
    if (cell.innerHTML !== ``) {
      alert("course conflict");
    }
    else {
      console.log(cell);
      let height = length / 60 * 50;
      offset = offset / 60 * 50;
      document.getElementById(day + time).innerHTML += `<div class="course" style="height:${height}px; margin-top:${offset}px"> ${course_info} </div>`;
      return;
    }
  }
  else {
    alert("none such course!");
  }
}

const DeleteEvent = (day, time) => {
  let cell = GetCell(day, time);

  if (cell) {
    console.log(cell);
    cell.innerHTML = ``;
    return;
  }
  else {
    alert("none such course!");
  }
}

const IsEmptyCell = (day, time) => {
  let cell = GetCell(day, time);
  return (cell.innerHTML === ``);
}

export default Calendar
export { AddEvent, DeleteEvent, IsEmptyCell }
