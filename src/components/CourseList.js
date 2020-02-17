import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CourseCard from './CourseCard';
import SearchBox from './SearchBox';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const CourseList = props => {
	const [searchContent, setSearchContent] = useState("")
  const [startTime, setStartTime] = useState("00:00")
  const [endTime, setEndTime] = useState("00:00")
  const [weekday, setWeekday] = useState(false)
  const [prerequisite, setPrerequisite] = useState(false)
  const [inDegree, setInDegree] = useState(false)
  const [enrolled, setEnrolled] = useState([])
  const [result, setResult] = useState(null)
	const classes = useStyles();
	console.log(props.courseList)

  return (
    <div className={classes.root}>
      <List component="nav" dense>
        <ListItem>
          <SearchBox />
        </ListItem>
				{
					props.courseList ?
					Object.values(props.courseList).map(
						course => <ListItem key={course.courseNumber}><CourseCard course={course}/></ListItem>
					) : null
				}
      </List>
    </div>
  );
}

export default CourseList