import React from 'react';


const Calendar = props => {
  let enrolled=['CS330','CS336'];
  // let courseList=props.courseList;
  // props.courseList: json object of course.json
  // console.log(courseList);
  CreateEnrolledCourse(enrolled,props.courseList);
  const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hour = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]



  const Cell= props => {
    // if (props.enrolled.length!==0){
    //   if props.enrolled[0]
    // }
    return <li className="cell" id={props.day + props.hour}></li>;
  }


  const Hour = props => {
    return <ul id={props.hour}>
        <li> {props.hour} </li>
        {weekday.map((day) => <Cell key={props.hour + day} day={day} hour={props.hour} enroleld={props.enrolled} />)}
    </ul>
  }


  const Calendar_HTML=<div className="calendar">
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
        {hour.map((hour) => <Hour key={hour} hour={hour} enrolled={enrolled} />)}
      </div>
    </div>
  </div>;

  return (Calendar_HTML);
}

function CreateEnrolledCourse(enrolled, courseList){
    let res={};
    console.log(courseList);
    for (var i of enrolled){
        let k=courseList[i];
        if (k==null){

        }
        else{
            console.log(k);
            let course={
                courseNumber:courseList[i]['courseNumber'],
                starTtime: courseList[i]['starTtime'],
                endTime: courseList[i]['endTime']
            };
            course['courseNumber']=courseList[i]['courseNumber'];
            course['starTtime']=courseList[i]['starTtime;']
            course['endTime']=courseList[i]['endTime'];
            course['weekday']=GetWeekDay(courseList[i]['weekday']);
        }

    }
    return res;
}

const GetClassLength= props=>{
  const day_prefix="August 19, 1975 ";
  let start=new Date(day_prefix+props.starTtime);
  let end=new Date(day_prefix+props.endTime);
  return (end.getMinutes()-start.getMinutes());
}

const GetWeekDay = str =>{
    let res=[];
    let map={'mo':'Monday', 'tu':'Tuesday', 'we':'Wednesday', 'th': 'Thursday', 'fr':'Friday' };
    let len=str.length;
    for (let i =0;i<len/2; i++){
        var s=str.substr(i*2, 2);
        res.push(map[s]);
    }
    return res;
}

const AddChosenCourse = props =>{
  let course_info="cs330";
  let day="Monday";
  let time="8:00";
  let length=60;
  let offset=30;
  console.log('Good');
  AddEvent(course_info, day, time, length, offset);
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
export { AddEvent, DeleteEvent, IsEmptyCell, AddChosenCourse }
