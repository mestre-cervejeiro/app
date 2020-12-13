import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import icon from '../assets/beer-icon.svg';
import avatar from '../assets/avatar.svg';

const useStyles = makeStyles({});

const Cervejaria = () => {
	const classes = useStyles();
	return (
		<div>
			<Grid container style={{ alignItems: 'center' }}>
				<Grid item xs={6} style={{ marginBottom: 50, marginTop: '2em' }}>
					<Typography variant="h5">Amanda</Typography>
					<Typography variant="h5">580 XP</Typography>
				</Grid>
				<Grid item xs={6}>
					<img style={{ width: '6em', margin: '1em' }} src={avatar} alt="logo" className={classes.image} />
				</Grid>
				<Grid item style={{ marginTop: 30 }}>
					<Typography variant="h5">Essas são as cervejas:</Typography>
					<Typography variant="body1">Você liberou mais uma cerveja! Clique nela para configurar</Typography>
					<Typography variant="body1">Para liberar mais, vote nas cervejas dos amigos</Typography>
				</Grid>
				<Grid item>
					<img style={{ width: '5em', margin: '1em' }} src={icon} alt="logo" className={classes.image} />
					<img style={{ width: '5em', margin: '1em' }} src={icon} alt="logo" className={classes.image} />
					<img style={{ width: '5em', margin: '1em' }} src={icon} alt="logo" className={classes.image} />
					<img
						style={{ width: '5em', opacity: '0.7', margin: '1em' }}
						src={icon}
						alt="logo"
						className={classes.image}
					/>
					<img
						style={{ width: '5em', opacity: '0.4', margin: '1em' }}
						src={icon}
						alt="logo"
						className={classes.image}
					/>
					<img
						style={{ width: '5em', opacity: '0.4', margin: '1em' }}
						src={icon}
						alt="logo"
						className={classes.image}
					/>
					<img
						style={{ width: '5em', opacity: '0.4', margin: '1em' }}
						src={icon}
						alt="logo"
						className={classes.image}
					/>
				</Grid>
			</Grid>
			<Typography bottom={0} style={{ color: '#a05344' }} variant="h4">
				Cervejaria A Mais Gostosa
			</Typography>
		</div>
	);
};

export default Cervejaria;
