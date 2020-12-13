import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import tutorial from '../assets/tutorial.svg';
import pgame from '../assets/strategy-game.png';
import sgame from '../assets/quiz.png';
import tgame from '../assets/ask-question.png';
import Box from '@material-ui/core/Box';

const Games = () => {
	return (
		<div>
			<Grid container style={{ alignItems: 'center' }}>
				<Grid>
					<Typography variant="h4">Aqui você pode ganhar mais pontos para montar as suas cervejas</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box
						borderRadius={10}
						style={{ marginTop: '3em', padding: '1em' }}
						borderColor="primary.main"
						border={3}
					>
						<img style={{ width: '90%' }} src={tutorial} alt="logo" />
						<Typography variant="h4" style={{ color: '#A25645' }}>
							Tutorial
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20, marginLeft: 'auto', marginRight: 'auto' }}>
					<Typography variant="h4" style={{ color: '#A25645', marginTop: 3 }}>
						Jogos
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="space-between">
						<Box borderRadius={10} borderColor="primary.main" border={2}>
							<img style={{ width: '5em', margin: '0.5em' }} src={pgame} alt="logo" />
						</Box>
						<Box borderRadius={10} borderColor="primary.main" border={2}>
							<img style={{ width: '5em', margin: '0.5em' }} src={sgame} alt="logo" />
						</Box>
						<Box borderRadius={10} borderColor="primary.main" border={2}>
							<img style={{ width: '5em', margin: '0.5em' }} src={tgame} alt="logo" />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Games;
