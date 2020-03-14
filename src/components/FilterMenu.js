import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, TextField, Grid, List, ListItem, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
	paper: {
		minWidth: 500
	},
	time: {
		width: 100
	}
});

const FilterMenu = props => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleWeekday = event => {
		props.setWeekday(event.target.value)
	}

	const handleStartTime = event => {
		props.setStartTime(event.target.value)
	}

	const handleEndTime = event => {
		props.setEndTime(event.target.value)
	}

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} startIcon={<FilterListIcon />}>
				Filter
      </Button>
			{
				props.inDegree ? <Chip
					label="In Degree Requirement"
					onDelete={() => { props.setInDegree(!props.inDegree) }}
					color="primary"
					variant="outlined"
				/> : null
			}
			{
				props.prerequisite ? <Chip
					label="Prerequisite fulfilled"
					onDelete={() => { props.setPrerequisite(!props.setPrerequisite) }}
					color="primary"
					variant="outlined"
				/> : null
			}
			{
				props.startTime && props.endTime ? <Chip
					label={`${props.startTime} - ${props.endTime}`}
					onDelete={() => { 
						props.setStartTime(null)
						props.setEndTime(null) 
					}}
					color="primary"
					variant="outlined"
				/> : null
			}
			{
				props.weekday ? <Chip
					label={props.weekday.toUpperCase()}
					onDelete={() => { props.setWeekday(null) }}
					color="primary"
					variant="outlined"
				/> : null
			}
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				className={classes.paper}
			>
				<List>
					<ListItem>
						<FormControl>
							<FormLabel>Time</FormLabel>
							<Grid container spacing={2}>
								<Grid item>
									<TextField className={classes.time} size="small" id="time" type="time" component="span"
										InputLabelProps={{
											shrink: true,
										}}
										onChange={handleStartTime}
									/>
								</Grid>
								<Grid item>
									<TextField className={classes.time} size="small" id="time" type="time" component="span"
										InputLabelProps={{
											shrink: true,
										}}
										onChange={handleEndTime}
									/>
								</Grid>
							</Grid>
						</FormControl>
					</ListItem>
					<ListItem>
						<FormControl component="fieldset">
							<FormLabel component="legend">Weekday</FormLabel>
							<RadioGroup aria-label="Weekday" name="Weekday" value={props.weekday} onChange={handleWeekday}>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<FormControlLabel value="mowefr" control={<Radio />} label="MoWeFr" />
									</Grid>
									<Grid item xs={6}>
										<FormControlLabel value="tuth" control={<Radio />} label="TuTh" />
									</Grid>
								</Grid>
							</RadioGroup>
						</FormControl>
					</ListItem>
					<ListItem>
						<FormControl>
							<FormLabel>Options</FormLabel>
							<FormControlLabel
								control={
									<Checkbox checked={props.prerequisite} onChange={() => { props.setPrerequisite(!props.prerequisite) }} />
								}
								label="Prerequisite fulfilled"
							/>
							<FormControlLabel
								control={
									<Checkbox checked={props.inDegree} onChange={() => { props.setInDegree(!props.inDegree) }} />
								}
								label="In Degree Requirement"
							/>
						</FormControl>
					</ListItem>
				</List>
				<Button color='primary' onClick={handleClose}>Apply</Button>
			</Menu>
		</div>
	);
}

export default FilterMenu