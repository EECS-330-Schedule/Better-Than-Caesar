import React, { useState, useEffect } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TopAppBar from './components/TopAppBar';
import { Container, Grid } from '@material-ui/core';
import CourseList from './components/CourseList';
import WeekCalendar from './components/WeekCalendar';
import CourseDetail from './components/CourseDetail';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
	content: {
    overflow: 'hidden',
    maxHeight: 'calc(100vh - 64px)'
	},
	courseList: {
    maxHeight: 'calc(100vh - 64px)', 
    overflowY: 'scroll',
  },
  calendar: {
    maxHeight: 'calc(100vh - 64px)',
    overflowY: 'hidden',
    padding: '10px'
  }
});

const App = () => {
  const classes = useStyles()
  const [courseList, setCourseList] = useState({})
  const [open, setOpen] = React.useState(false)
  const [detailCourse, setDetailCourse] = React.useState(null)
  const [enrolled, setEnrolled] = useState([])
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
          open ? 
            <CourseDetail setOpen={setOpen} course={detailCourse} enrolled={enrolled} setEnrolled={setEnrolled}></CourseDetail>
            :
            <CourseList
              courseList={courseList}
              open={open}
              setOpen={setOpen}
              detailCourse={detailCourse}
              setDetailCourse={setDetailCourse}
              enrolled={enrolled}
              setEnrolled={setEnrolled}
            /> 
          :
          <Grid className={classes.content} container justify="center">
            <Grid className={classes.courseList} item md={5}>
              {
                open ? <CourseDetail setOpen={setOpen} course={detailCourse} enrolled={enrolled} setEnrolled={setEnrolled}></CourseDetail> :
                  <CourseList
                    className='course-list'
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
            <Grid className={classes.calendar} item container md={7}>
              <WeekCalendar enrolled={enrolled} courseList={courseList} />
            </Grid>
          </Grid>
      }
    </Container>
  );
}

export default App;
