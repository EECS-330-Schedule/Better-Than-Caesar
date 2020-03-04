import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  WeekdayView,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';


function GetWeekDay(str){
    let res=[];
    let map={'mo':'2', 'tu':'3', 'we':'4', 'th': '5', 'fr':'6' };
    let len=str.length;
    for (let i =0;i<len/2;i++){
        var s=str.substr(i*2, 2);
        res.push(map[s]);
    }
    return res;
}


function ParseTime(str){
  if (str==null){
    return
  }
  return str.split(':');
}


function transform(enrolled, courseList){
  if (enrolled.length===0 || Object.keys(courseList).length===0){
    return;
  }
  else{
    let res=[];
    for (let i of enrolled){
      let weekday=GetWeekDay(courseList[i].weekday);
      for (let j of weekday){
        let course={};
        course.title=courseList[i].courseNumber;
        let time=ParseTime(courseList[i].startTime);
        course.startDate=new Date(2020, 2, j, time[0], time[1]);
        time=ParseTime(courseList[i].endTime);
        course.endDate=new Date(2020, 2, j, time[0], time[1]);
        course.id=0;
        course.location=courseList[i].location;
        res.push(course);
      }
    }
    return res;
  }
}




const WeekCalendar=props=> {
  console.log(props);
  let enrolled=['CS330'];
  let state = {
    data: transform(props.enrolled, props.courseList),
    currentDate: new Date('2020-03-3'),
  };


  
  const { data, currentDate } = state;
  console.log(data);
  return (
      <Paper className="calendar">
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            defaultCurrentDate={currentDate}
          />
          <WeekView
            startDayHour={8}
            endDayHour={22}
          />
          <Appointments />
          <AllDayPanel />
        </Scheduler>
      </Paper>
    );
  
}

export default WeekCalendar