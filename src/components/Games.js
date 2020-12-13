import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import tutorial from '../assets/tutorial.svg';
import pgame from '../assets/strategy-game.png';
import sgame from '../assets/quiz.png';
import tgame from '../assets/ask-question.png';
import { borders } from '@material-ui/system';

const Games = () => {
	return (
		<div>
			<Grid container style={{ alignItems: 'center' }}>
				<Grid>
					<Typography variant="h4">Aqui você pode ganhar mais pontos para montar as suas cervejas</Typography>
				</Grid>
				<Grid>
					<img style={{ width: '90%', marginTop: '5em' }} src={tutorial} alt="logo" />
				</Grid>
				<Grid style={{ marginTop: 20, marginLeft: 'auto', marginRight: 'auto' }}>
					<Typography variant="h4" style={{ color: '#A25645', marginTop: 3 }}>
						Jogos
					</Typography>
				</Grid>
				<Grid>
					<img
						style={{ width: '6em', margin: '1em', paddingLeft: 4, paddingRight: 4 }}
						src={pgame}
						alt="logo"
					/>
					<img
						style={{ width: '6em', margin: '1em', paddingLeft: 4, paddingRight: 4 }}
						src={sgame}
						alt="logo"
					/>
					<img
						style={{ width: '6em', margin: '1em', paddingLeft: 4, paddingRight: 4 }}
						src={tgame}
						alt="logo"
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Games;
