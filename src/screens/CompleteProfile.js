import React, { useState } from 'react';
import PaperContainer from '../components/PaperContainer';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextInput from '../components/TextInput';
import Grid from '@material-ui/core/Grid';
import ButtonFilled from '../components/ButtonFilled';

const CompleteProfile = () => {
	const [ name, setName ] = useState('');
	const [ state, setState ] = useState('');
	const [ age, setAge ] = useState('');
	const [ gender, setGender ] = useState('');

	return (
		<PaperContainer>
			<Typography variant="h4">Complete o seu perfil para ganhar a primeira cerveja</Typography>
			<Grid container style={{ marginTop: 50 }}>
				<Grid style={{ marginTop: 20 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Nome completo
					</Typography>
					<TextInput
						variant="outlined"
						fullWidth
						type="name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
						label="Nome Completo"
						inputProps={{ style: { color: 'white' } }}
					/>
				</Grid>
				<Grid style={{ marginTop: 20 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Estado
					</Typography>
					<TextInput
						variant="outlined"
						fullWidth
						type="state"
						required
						value={state}
						onChange={(e) => setState(e.target.value)}
						label="Estado"
						inputProps={{ style: { color: 'white' } }}
					/>
				</Grid>
				<Grid style={{ marginTop: 20 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Idade
					</Typography>
					<TextInput
						variant="outlined"
						fullWidth
						type="age"
						required
						value={age}
						onChange={(e) => setAge(e.target.value)}
						label="Idade"
						inputProps={{ style: { color: 'white' } }}
					/>
				</Grid>
				<Grid style={{ marginTop: 20 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Sexo
					</Typography>
					<TextInput
						variant="outlined"
						fullWidth
						type="gender"
						required
						value={gender}
						onChange={(e) => setGender(e.target.value)}
						label="Sexo"
						inputProps={{ style: { color: 'white' } }}
					/>
				</Grid>
				<Grid style={{ marginTop: 40 }} item xs={12}>
					<NavLink to="/montarcervejaria" style={{ textDecoration: 'none' }}>
						<ButtonFilled>
							<Typography variant="body1">SALVAR</Typography>
						</ButtonFilled>
					</NavLink>
				</Grid>
			</Grid>
		</PaperContainer>
	);
};

export default CompleteProfile;
