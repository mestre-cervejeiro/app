import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import target from '../assets/target.svg';
import avatar from '../assets/avatar.svg';
import ButtonFilled from './ButtonFilled';

const Desafio = () => {
	return (
		<div>
			<Grid container style={{ justifyContent: 'center' }}>
				<Grid item xs={6} style={{ marginBottom: 50, marginTop: '2em' }}>
					<Typography variant="h5">Amanda</Typography>
					<Typography variant="h5">580 XP</Typography>
				</Grid>
				<Grid item xs={6}>
					<img style={{ width: '6em', margin: '1em' }} src={avatar} alt="logo" />
				</Grid>
				<Typography variant="h4">Desafio da semana</Typography>
				<Grid item style={{ marginTop: 30 }}>
					<img style={{ width: '15em', margin: '1em' }} src={target} alt="logo" />
					<NavLink to="/montarcerveja">
						<ButtonFilled style={{ margin: 30 }}>
							<Typography variant="body2">Crie uma cerveja para uma senhora de 80 anos</Typography>
						</ButtonFilled>
					</NavLink>
				</Grid>
			</Grid>
		</div>
	);
};

export default Desafio;
