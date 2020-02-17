import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import color from '@material-ui/core/colors/amber';

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

const SearchBox = () => {
	const classes = useStyles();

	return (
		<Paper component="form" className={classes.root}>
			<SearchIcon className={classes.iconButton}/>
			<InputBase
				className={classes.input}
				placeholder="Search Courses"
			/>
		</Paper>
	);
}

export default SearchBox