import React from 'react';
import beer from '../assets/beer.svg';

import PaperContainer from '../components/PaperContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const MontarCervejaria = () => {

	return (
		<PaperContainer>
			<Typography variant="h4">Parabéns, você criou uma cerveja totalmente com a sua cara!</Typography>
			<Grid container style={{ marginTop: 50 }}>
				 <Grid style={{ marginTop: 50 }} item xs={12}>
                 <img style={{ width: '90%', margin: '1em' }} src={beer} alt="logo" />
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Essa é a sua cerveja! <br/>Cerveja Stout com 5% de álcool aroma de abacaxi
					</Typography>
				</Grid> 
			</Grid>
		</PaperContainer>
	);
};

export default MontarCervejaria;
