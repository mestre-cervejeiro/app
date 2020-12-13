import React, { useContext } from 'react';
import beer from '../assets/beer.svg';
import { NavLink } from 'react-router-dom';
import PaperContainer from '../components/PaperContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonFilled from '../components/ButtonFilled';
import { Context as BeerContext } from '../context/BeerContext';

const MontarCervejaria = () => {
	const { state } = useContext(BeerContext);
	return (
		<PaperContainer>
			<Typography variant="h4">Parabéns, você criou uma cerveja totalmente com a sua cara!</Typography>
			<Grid container style={{ marginTop: 50, width: '100%' }}>
				<Grid xs={12} style={{ marginTop: 50 }} item>
					<img style={{ width: '90%', margin: '1em' }} src={beer} alt="logo" />
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Essa é a sua cerveja! <br />Cerveja {state[state.length - 1].estilo} com{' '}
						{state[state.length - 1].fruta}, aroma {state[state.length - 1].aroma} e amargor{' '}
						{state[state.length - 1].amargor}
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ justifyContent: 'center', marginTop: 20 }}>
					<NavLink to="/dashboard" style={{ textDecoration: 'none', justifyContent: 'center' }}>
						<ButtonFilled>
							<Typography>Voltar ao dashboard</Typography>
						</ButtonFilled>
					</NavLink>
				</Grid>
			</Grid>
		</PaperContainer>
	);
};

export default MontarCervejaria;
