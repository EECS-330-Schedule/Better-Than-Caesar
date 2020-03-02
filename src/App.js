import React, {useState, useEffect} from 'react';
import './App.css';
import TopAppBar from './components/TopAppBar';
import { Container, Grid } from '@material-ui/core';
import CourseList from './components/CourseList';
import Calendar from './components/Calendar';

function App() {
  const [courseList, setCourseList] = useState({})
  const [open, setOpen] = React.useState(null)
  const detailPortal = React.useRef(null)

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
        <Grid item md={6} xs={12}>
          <div ref={detailPortal}></div>
          <CourseList courseList={courseList} detailPortal={detailPortal} open={open} setOpen={setOpen}/>
        </Grid>
        <Grid item container md={6} xs={0}>
          <Calendar />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
