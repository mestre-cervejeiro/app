import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaperContainer from '../components/PaperContainer';
import cheers from '../assets/cheers.svg';
import Typography from '@material-ui/core/Typography';
import ButtonFilled from '../components/ButtonFilled';
import FacebookIcon from '@material-ui/icons/Facebook';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
	image: {
		width: '100%',
		marginTop: '3em',
		marginBottom: '3em'
	}
});

const Landing = () => {
	const classes = useStyles();
	return (
		<PaperContainer>
			<Typography variant="h4">Parabéns, você acaba de se tornar Mestre Cervejeiro!</Typography>
			<img src={cheers} alt="logo" className={classes.image} />
			<div style={{ marginBottom: '2em' }}>
				<NavLink to="/completeprofile" style={{ textDecoration: 'none' }}>
					<ButtonFilled>
						<FacebookIcon style={{ fontSize: 40 }} />
					</ButtonFilled>
				</NavLink>
			</div>
			<div style={{ marginBottom: '2em' }}>
				<NavLink to="/completeprofile" style={{ textDecoration: 'none' }}>
					<ButtonFilled>
						<i className="fab fa-google" style={{ fontSize: 40 }} />
					</ButtonFilled>
				</NavLink>
			</div>
			<Typography variant="body1" bottom={0}>
				Or create an account here
			</Typography>
		</PaperContainer>
	);
};

export default Landing;
