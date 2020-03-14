import * as React from 'react';
import Card from '@material-ui/core/Card';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Button, IconButton } from '@material-ui/core';
import MoreIcon from "@material-ui/icons/More"

function GetWeekDay(str) {
  let res = [];
  let map = { 'mo': '2', 'tu': '3', 'we': '4', 'th': '5', 'fr': '6' };
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    var s = str.substr(i * 2, 2);
    res.push(map[s]);
  }
  return res;
}

function ParseTime(str) {
  if (str == null) {
    return
  }
  return str.split(':');
}

function transform(enrolled, courseList) {
  if (enrolled.length === 0 || Object.keys(courseList).length === 0) {
    return;
  }
  else {
    let res = [];
    for (let i of enrolled) {
      let weekday = GetWeekDay(courseList[i].weekday);
      for (let j of weekday) {
        let course = {};
        course.title = courseList[i].courseNumber + " " + courseList[i].title;
        let time = ParseTime(courseList[i].startTime);
        course.startDate = new Date(2020, 2, j, time[0], time[1]);
        time = ParseTime(courseList[i].endTime);
        course.endDate = new Date(2020, 2, j, time[0], time[1]);
        course.id = 0;
        course.location = courseList[i].location;
        res.push(course);
      }
    }
    return res;
  }
}


const WeekCalendar = props => {

  let state = {
    data: transform(props.enrolled, props.courseList),
    currentDate: new Date(2020, 2, 6),
  };

  const { data, currentDate } = state;

  const handleDrop = title => {
    let arr = title.split(" ");
		let newArr = props.enrolled.filter(course=>{return course!==arr[0]})
		props.setEnrolled(newArr);
	}

  const Header = (({
    children, appointmentData, classes, ...restProps
  }) => (
      <AppointmentTooltip.Header
        {...restProps}
        appointmentData={appointmentData}
      >
        <Button color='secondary' onClick={() => handleDrop(appointmentData.title)}>Drop</Button>
      </AppointmentTooltip.Header>
    ));

  return (
    <Card style={{ height: "100%", paddingTop: '5px' }}>
      <Scheduler
        data={data}
        height='auto'
      >
        <ViewState
          currentDate={currentDate}
        />
        <WeekView
          startDayHour={8}
          endDayHour={22}
          excludedDays={[0, 6]}
        />
        <Appointments />
        <AppointmentTooltip
          
          headerComponent={Header}
        />
      </Scheduler>
    </Card>
  );

}

export default WeekCalendar