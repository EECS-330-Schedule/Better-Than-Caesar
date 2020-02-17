import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Typography, Button, CardContent, CardActions, Card, Grid } from '@material-ui/core'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const CourseCard = props => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h6">
					{props.course.courseNumber}
        </Typography>
				<Typography variant="body1" component="h2" gutterBottom>
					{props.course.title}
        </Typography>
				<Grid container alignItems="center" spacing={1} style={{color:"grey"}}>
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
							TuTh 12:20 - 13:50
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
				<Grid container justify="flex-end" style={{width:"100%"}}>
					<Grid item style={{width:'auto'}}>
						<Button size="small" color='primary'>Enroll</Button>
						<Button size="small">Learn More</Button>
					</Grid>
				</Grid>
			</CardActions>
		</Card>
	);
}

export default CourseCard
