import React, {useState, useEffect} from 'react';
import './App.css';
import TopAppBar from './components/TopAppBar';
import { Container, Grid } from '@material-ui/core';
import CourseList from './components/CourseList';
import Calendar from './components/Calendar';

function App() {
  const [courseList, setCourseList] = useState({})

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
      <Grid className="content" container justify="center">
        <Grid item container md={8} xs={12}>
        </Grid>
        <Grid item md={4} xs={6}>
         <CourseList courseList={courseList}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
