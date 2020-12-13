import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
			<div className={classes.container}>
				<div className={classes.paper}>{children}</div>
			</div>
		</div>
	);
};

export default PaperContainer;
