import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Typography, Button, CardContent, CardActions, Card, Grid, Portal } from '@material-ui/core'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	enroll: {
		color: "green"
	}
});


const CourseCard = props => {
	const classes = useStyles();

	const handleClick = () => {
		props.setDetailCourse(props.course)
		props.setOpen(true)
	}

	const handleEnroll = () => {
		props.setEnrolled([...props.enrolled, props.course.courseNumber]);
	}

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h6">
					{props.course.courseNumber}
				</Typography>
				<Typography variant="body1" component="h2" gutterBottom>
					{props.course.title}
				</Typography>
				<Grid container alignItems="center" spacing={1} style={{ color: "grey" }}>
					<Grid item container spacing={1}>
						<Grid item>
							{
								props.course.prerequisite ? <Chip variant="outlined" label="Prerequisite" color="primary" size="small" icon={<CheckCircleRoundedIcon />} />
									: <Chip variant="outlined" label="Prerequisite" color="secondary" size="small" icon={<CancelRoundedIcon />} />
							}
						</Grid>
						<Grid item>
							{
								props.course.inDegree ? <Chip variant="outlined" label="Degree Requirement" color="primary" size="small" icon={<CheckCircleRoundedIcon />} />
									: <Chip variant="outlined" label="Degree Requirement" size="small" icon={<CancelRoundedIcon />} />
							}
						</Grid>
					</Grid>
					<Grid item container spacing={1}>
						<Grid item>
							<AccessTimeIcon fontSize="small" />
						</Grid>
						<Grid item>
							{props.course.weekday.toUpperCase()} {props.course.startTime} - {props.course.endTime}
						</Grid>
						<Grid item>
							<AssignmentIndOutlinedIcon fontSize="small" />
						</Grid>
						<Grid item>
							{props.course.instructor}
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Grid container justify="flex-end" style={{ width: "100%" }}>
					<Grid item style={{ width: 'auto' }}>
						<Button
							className={props.enrolled.indexOf(props.course.courseNumber) > -1 ? classes.enroll : classes.enrolled}
							startIcon={props.enrolled.indexOf(props.course.courseNumber) > -1 ? <CheckIcon /> : null}
							size="small" color='primary'
							onClick={handleEnroll}
							disabled={props.enrolled.indexOf(props.course.courseNumber) > -1}
						>
							{props.enrolled.indexOf(props.course.courseNumber) > -1 ? "Enrolled" : "Enroll"}
						</Button>
						<Button size="small" onClick={handleClick}>Learn More</Button>
					</Grid>
				</Grid>
			</CardActions>
		</Card>
	);
}

export default CourseCard
