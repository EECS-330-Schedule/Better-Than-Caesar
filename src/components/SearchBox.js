import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		margin: theme.spacing(1),
		color: 'grey'
	},
}));



const SearchBox = props => {
	const classes = useStyles();
	return (
		<Paper component="form" className={classes.root}>
			<SearchIcon className={classes.iconButton}/>
			<InputBase
				className={classes.input}
				placeholder="Search Courses"
				onChange={event=>props.setSearchContent(event.target.value)}
			/>
		</Paper>
	);
}

export default SearchBox