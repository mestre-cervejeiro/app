import React, { useState, useContext } from 'react';
import { Context as ProfileContext } from '../context/ProfileContext';
import { withRouter } from 'react-router-dom';
import PaperContainer from '../components/PaperContainer';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextInput from '../components/TextInput';
import Grid from '@material-ui/core/Grid';
import ButtonFilled from '../components/ButtonFilled';

const MontarCervejaria = (props) => {
	const [ name, setName ] = useState('');
	const { saveBrewery } = useContext(ProfileContext);
	const submitAle = () => {
		console.log('submit Ale');
		saveBrewery({ name, family: 'Ale' });
		props.history.push('/dashboard');
	};
	const submitLager = () => {
		console.log('submit lager');
		saveBrewery({ name, family: 'Lager' });
		props.history.push('/dashboard');
	};
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
						inputProps={{ style: { color: '#6b362c', zIndex: 10 } }}
					/>
				</Grid>

				<Grid style={{ marginTop: 50 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						Qual a sua cerveja preferida? Essa vai ser sua família.
					</Typography>

					<ButtonFilled onClick={submitAle} style={{ margin: 20 }}>
						<Typography variant="h5">ALE</Typography>
					</ButtonFilled>

					<ButtonFilled onClick={submitLager} style={{ margin: 20 }}>
						<Typography variant="h5">LAGER</Typography>
					</ButtonFilled>
				</Grid>
			</Grid>
		</PaperContainer>
	);
};

export default withRouter(MontarCervejaria);
