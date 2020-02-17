import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CourseCard from './CourseCard';
import SearchBox from './SearchBox';
import FilterMenu from './FilterMenu';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
}));

const CourseList = props => {
	const [searchContent, setSearchContent] = useState("")
	const [startTime, setStartTime] = useState("00:00")
	const [endTime, setEndTime] = useState("00:00")
	const [weekday, setWeekday] = useState(null)
	const [prerequisite, setPrerequisite] = useState(false)
	const [inDegree, setInDegree] = useState(false)
	const [enrolled, setEnrolled] = useState([])
	const classes = useStyles();

	const checkCourse = course => {
		if (course.inDegree !== true && inDegree === true) {
			return false
		}
		if (course.prerequisite !== true && prerequisite === true) {
			return false
		}
		if (searchContent!==""){
			if(
				course.courseNumber
					.toLowerCase()
					.indexOf(searchContent.toLowerCase()) < 0 
					&& 
				course.title
					.toLowerCase()
					.indexOf(searchContent.toLowerCase()) < 0
			){
				return false
			}
		}
		return true
	}

	const filterList = courses => {
		let result = Object.values(props.courseList).filter(checkCourse)
		if(result.length === 0){
			return null
			console.log("No items")
		}else{
			return result
		}
	}

	return (
		<div className={classes.root}>
			<List component="nav" dense>
				<ListItem>
					<SearchBox setSearchContent={setSearchContent} />
				</ListItem>
				<ListItem>
					<FilterMenu
						startTime={startTime}
						endTime={endTime}
						weekday={weekday}
						prerequisite={prerequisite}
						inDegree={inDegree}
						setStartTime={setStartTime}
						setEndTime={setEndTime}
						setWeekday={setWeekday}
						setPrerequisite={setPrerequisite}
						setInDegree={setInDegree}
					/>
				</ListItem>
				{
					props.courseList ?
						filterList(props.courseList) ?
							filterList(props.courseList).filter(checkCourse).map(
								course => <ListItem key={course.courseNumber}><CourseCard course={course} /></ListItem>
							) : <Typography align="center" style={{color:"grey"}}>No result for "{searchContent}"</Typography>
						: null
				}
			</List>
		</div>
	);
}

export default CourseList