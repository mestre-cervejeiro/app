import React, { useState, useContext } from 'react';
import PaperContainer from '../components/PaperContainer';
import TextInput from '../components/TextInput';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonFilled from '../components/ButtonFilled';
import { Context as ProfileContext } from '../context/ProfileContext';
import { withRouter } from 'react-router-dom';

const CompleteProfile = (props) => {
	const { saveUser } = useContext(ProfileContext);
	const [ name, setName ] = useState('');
	const [ state, setState ] = useState('');
	const [ age, setAge ] = useState('');
	const [ gender, setGender ] = useState('');
	const [ escolaridade, setEscolaridade ] = useState('');
	

	const handleSubmit = async () => {
		saveUser({ name, state, age, gender });
		props.history.push('/montarcervejaria');
	};

	return (
		<PaperContainer>
			<Typography variant="h4">Complete o seu perfil para ganhar a primeira cerveja</Typography>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<Grid container style={{ marginTop: 50 }}>
					<Grid style={{ marginTop: 15 }} item xs={12}>
						<Typography variant="h5" style={{ color: ' #6b362c' }}>
							Nome completo
						</Typography>
						<TextInput
							variant="outlined"
							fullWidth
							required
							type="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							inputProps={{ style: { color: '#6b362c', zIndex: 10 } }}
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
							value={state}
							onChange={(e) => setState(e.target.value)}
							inputProps={{ style: { color: '#6b362c', zIndex: 10 } }}
						/>
					</Grid>
					<Grid style={{ marginTop: 20 }} item xs={12}>
						<Typography variant="h5" style={{ color: ' #6b362c' }}>
							Idade
						</Typography>
						<TextInput
							variant="outlined"
							fullWidth
							type="number"
							value={age}
							onChange={(e) => setAge(e.target.value)}
							inputProps={{ style: { color: '#6b362c', zIndex: 10 } }}
						/>
					</Grid>
					<Grid style={{ marginTop: 20 }} item xs={12}>
						<Typography variant="h5" style={{ color: ' #6b362c' }}>
							Escolaridade
						</Typography>
						<TextInput
							variant="outlined"
							fullWidth
							type="Escolaridade"
							value={escolaridade}
							onChange={(e) => setEscolaridade(e.target.value)}
							inputProps={{ style: { color: '#6b362c', zIndex: 10 } }}
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
							value={gender}
							onChange={(e) => setGender(e.target.value)}
							inputProps={{ style: { color: '#6b362c', zIndex: 10 } }}
						/>
					</Grid>
					<Grid style={{ marginTop: 40 }} item xs={12}>
						<ButtonFilled type="submit">
							<Typography variant="body1">SALVAR</Typography>
						</ButtonFilled>
					</Grid>
				</Grid>
			</form>
		</PaperContainer>
	);
};

export default withRouter(CompleteProfile);
