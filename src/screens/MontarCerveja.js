import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PaperContainer from '../components/PaperContainer';
import Typography from '@material-ui/core/Typography';
import TextInput from '../components/TextInput';
import Selector from '../components/Selector';
import Grid from '@material-ui/core/Grid';
import ButtonFilled from '../components/ButtonFilled';
import { makeStyles } from '@material-ui/core/styles';
import { Context as BeerContext } from '../context/BeerContext';

const useStyles = makeStyles({
	btn: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	item: {
		marginTop: 30
	}
});

const MontarCerveja = (props) => {
	const frutas = [
		{
			value: 'Siriguela',
			label: 'Siriguela'
		},
		{
			value: 'Abacaxi',
			label: 'Abacaxi'
		},
		{
			value: 'Acerola',
			label: 'Acerola'
		},
		{
			value: 'Uva',
			label: 'Uva'
		}
	];

	const estilos = [
		{
			value: 'Trigo',
			label: 'Trigo'
		},
		{
			value: 'Lambic & Sour',
			label: 'Lambic & Sour'
		},
		{
			value: 'Pale Ale',
			label: 'Pale Ale'
		},
		{
			value: 'Belgian Ale',
			label: 'Belgian Ale'
		},
		{
			value: 'English Bitter',
			label: 'English Bitter'
		},
		{
			value: 'Porter',
			label: 'Porter'
		},
		{
			value: 'Scottish Ale',
			label: 'Scottish Ale'
		},
		{
			value: 'Stout',
			label: 'Stout'
		},
		{
			value: 'Brown Ale',
			label: 'Brown Ale'
		}
	];

	const [ fruta, setFrutas ] = useState('Siriguela');
	const [ estilo, setEstilo ] = useState('');
	const [ amargor, setAmargor ] = useState(2);
	const [ aroma, setAroma ] = useState(2);
	const { addBeer } = useContext(BeerContext);
	const classes = useStyles();
	const handleSubmit = async () => {
		addBeer({ fruta, estilo, aroma, amargor });
		props.history.push('/yourbeer');
	};
	const handleAmargorChange = (event, newValue) => {
		setAmargor(newValue);
	};
	const handleAromaChange = (event, newValue) => {
		setAroma(newValue);
	};
	return (
		<PaperContainer>
			<Typography variant="h4">Agora você vai aprender a fazer a sua cerveja!</Typography>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<Grid container>
					<Grid style={{ marginTop: 20 }} item xs={12}>
						<Typography variant="h5" style={{ color: 'white' }}>
							1. O primeiro passo é escolher o estilo. Ele determina a intensidade
						</Typography>
						<Grid className={classes.btn}>
							{estilos.map((option) => (
								<ButtonFilled
									className={classes.item}
									key={option.value}
									value={option.value}
									onClick={() => {
										setEstilo(option.value);
									}}
								>
									{option.label}
								</ButtonFilled>
							))}
						</Grid>
					</Grid>

					<Grid style={{ marginTop: 50 }} item xs={12}>
						<Typography variant="h5" style={{ color: ' #6b362c' }}>
							2. Você deseja adicionar uma fruta?
						</Typography>
						<TextInput
							id="frutas"
							select
							fullWidth
							value={fruta}
							onChange={(e) => {
								setFrutas(e.target.value);
								console.log(e.target.value);
							}}
							SelectProps={{
								native: true
							}}
							variant="outlined"
							inputProps={{ style: { color: '#6b362c', zIndex: 10 } }}
						>
							{frutas.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</TextInput>
					</Grid>
					<Grid style={{ marginTop: 50 }} item xs={12}>
						<Typography variant="h5" style={{ color: ' #6b362c' }}>
							3. Você escolheu a Pale Ale. Agora escolha a quantidade de lúpulo, ele determina o amargor
						</Typography>
						<Selector value={amargor} min={1} step={1} marks max={3} onChange={handleAmargorChange} />
					</Grid>
					<Grid style={{ marginTop: 50 }} item xs={12}>
						<Typography variant="h5" style={{ color: ' #6b362c' }}>
							4. O lúpulo também é responsável pelo aroma. Qual o nível de aroma você prefere?
						</Typography>
						<Selector marks value={aroma} min={1} step={1} max={3} onChange={handleAromaChange} />
					</Grid>
					<Grid item style={{ width: '100%', marginTop: 20 }}>
						<ButtonFilled style={{ marginBottom: 30 }} type="submit">
							Salvar
						</ButtonFilled>
					</Grid>
				</Grid>
			</form>
		</PaperContainer>
	);
};

export default withRouter(MontarCerveja);
