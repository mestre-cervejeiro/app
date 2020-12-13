import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '500px'
	},
	paper: {
		background: 'linear-gradient(0deg, #EDC988 0%, #a05344 100%)',

		padding: 40,
		color: 'white',
		justifyContent: 'center',
		textAlign: 'center',
		height: '100%'
	}
});

const PaperContainer = ({ children }) => {
	const classes = useStyles();
	return (
		<div style={{ justifyContent: 'center', width: '100vw', display: 'flex' }}>
			<div className={classes.container}>
				<div className={classes.paper}>{children}</div>
			</div>
		</div>
	);
};

export default PaperContainer;
