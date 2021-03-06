import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import beer from '../assets/beer.svg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Divider from '@material-ui/core/Divider';

const Votação = () => {
	return (
		<div>
			<Typography variant="h4">Qual a melhor cerveja para o desafio?</Typography>
			<Grid style={{ marginTop: '2em' }} alignItems="center" directio="row" container justify="center">
				<Grid item xs={5}>
					<ArrowBackIosIcon style={{ marginTop: '2em', fontSize: '5em' }} />
					<Typography
						style={{
							marginTop: '2em'
						}}
						variant="h5"
					>
						IPA de framboesa
					</Typography>
					<img style={{ width: '6em', margin: '1em' }} src={beer} alt="logo" />
				</Grid>
				<Divider
					style={{ width: 3, backgroundColor: '#a05344', marginTop: '1.5em' }}
					orientation="vertical"
					flexItem
				/>
				<Grid
					item
					xs={5}
					style={{
						marginBottom: 50,
						marginTop: '4em',
						height: '100%',
						// display: 'flex',
						alignItems: 'center'
					}}
				>
					<Typography variant="h5">Stout de café</Typography>
					<img style={{ width: '6em', margin: '1em' }} src={beer} alt="logo" />
					<ArrowForwardIosIcon style={{ fontSize: '5em' }} />
				</Grid>
			</Grid>
		</div>
	);
};

export default Votação;
