import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '857px',
		justifyContent: 'center',
		alignItems: 'center',
		width: '480px',
		maxWidth: '100%',
		borderRadius: 10,
		background: 'linear-gradient(0deg, #EDC988 0%, #a05344 100%)'
	},
	paper: {
		padding: '2em',
		color: 'white',
		justifyContent: 'center',
		textAlign: 'center',
		height: '100%'
	}
});

const PaperContainer = ({ children }) => {
	const classes = useStyles();
	return (
		<div
			style={{ justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', display: 'flex' }}
		>
			<Paper className={classes.container}>
				<Box overflow="auto" className={classes.paper}>
					<div className={classes.paper}>{children}</div>
				</Box>
			</Paper>
		</div>
	);
};

export default PaperContainer;
