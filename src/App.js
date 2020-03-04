import React, { useState, useEffect } from 'react';
import './App.css';
import TopAppBar from './components/TopAppBar';
import { Container, Grid } from '@material-ui/core';
import CourseList from './components/CourseList';
import Calendar, {AddChosenCourse} from './components/Calendar';
import WeekCalendar from './components/WeekCalendar';
import CourseDetail from './components/CourseDetail';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function App() {
  const [courseList, setCourseList] = useState({})
  const [open, setOpen] = React.useState(false)
  const [detailCourse, setDetailCourse] = React.useState(null)
  const [enrolled, setEnrolled] = useState(["CS330","CS336"])
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("./courses.json");
      const json = await response.json();
      setCourseList(json);
    };
    fetchCourses();
  }, []);

  return (
    <Container disableGutters>
      <TopAppBar />
      {
        isMobile ?
          open ? <CourseDetail setOpen={setOpen} course={detailCourse} enrolled={enrolled} setEnrolled={setEnrolled}></CourseDetail> :
            <CourseList
              courseList={courseList}
              open={open}
              setOpen={setOpen}
              detailCourse={detailCourse}
              setDetailCourse={setDetailCourse}
              enrolled={enrolled}
              setEnrolled={setEnrolled}
            /> :
          <Grid className="content" container justify="center">
            <Grid item md={6}>
              {
                open ? <CourseDetail setOpen={setOpen} course={detailCourse} enrolled={enrolled} setEnrolled={setEnrolled}></CourseDetail> :
                  <CourseList
                    courseList={courseList}
                    open={open}
                    setOpen={setOpen}
                    detailCourse={detailCourse}
                    setDetailCourse={setDetailCourse}
                    enrolled={enrolled}
                    setEnrolled={setEnrolled}
                  />

              }
            </Grid>
            <Grid item container md={6}>
              <WeekCalendar enrolled={enrolled} courseList={courseList}/>
            </Grid>
          </Grid>
      }

    </Container>
  );
}

export default App;
