import React, { useState } from 'react';

import PaperContainer from '../components/PaperContainer';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextInput from '../components/TextInput';
import Grid from '@material-ui/core/Grid';
import ButtonFilled from '../components/ButtonFilled';

const MontarCervejaria = () => {
	const [ name, setName ] = useState('');

	return (
		<PaperContainer>
			<Typography variant="h4">Agora decida como será a SUA cervejaria</Typography>
			<Grid container style={{ marginTop: 50 }}>
				<Grid style={{ marginTop: 20 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Qual o nome dela?
					</Typography>
					<TextInput
						variant="outlined"
						fullWidth
						type="name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
						label="Nome"
						inputProps={{ style: { color: 'white' } }}
					/>
				</Grid>

				<Grid style={{ marginTop: 50 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Qual a sua cerveja preferida? Essa vai ser sua família.
					</Typography>
					<NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
						<ButtonFilled style={{ margin: 30 }}>
							<Typography variant="h5">ALE</Typography>
						</ButtonFilled>
					</NavLink>
					<NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
						<ButtonFilled style={{ margin: 30 }}>
							<Typography variant="h5">LAGER</Typography>
						</ButtonFilled>
					</NavLink>
				</Grid>
			</Grid>
		</PaperContainer>
	);
};

export default MontarCervejaria;
