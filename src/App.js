import React, {useState, useEffect} from 'react';
import './App.css';
import TopAppBar from './components/TopAppBar';
import { Container, Grid } from '@material-ui/core';
import CourseList from './components/CourseList';

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
        <Grid item container md={6} xs={12}>
          <CourseList courseList={courseList}/>
        </Grid>
        <Grid item md={6} xs={12}>
         
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
