import React, { useState } from 'react';

import PaperContainer from '../components/PaperContainer';
import Typography from '@material-ui/core/Typography';
import TextInput from '../components/TextInput';
import Selector from '../components/Selector';
import Grid from '@material-ui/core/Grid';
import ButtonFilled from '../components/ButtonFilled';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
	btn: {
		display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        width: '500px',
        justifyContent: 'space-between',
    },
    item: {
        marginTop: 30,
    }
});


const MontarCerveja = () => {
    const frutas = [
        {
          value: 'Siriguela',
          label: 'Siriguela',
        },
        {
          value: 'Abacaxi',
          label: 'Abacaxi',
        },
        {
          value: 'Acerola',
          label: 'Acerola',
        },
        {
          value: 'Uva',
          label: 'Uva',
        },
      ];

    const estilo = [
        {
            value: 'Trigo',
            label: 'Trigo',
        },
        {
            value: 'Lambic & Sour',
            label: 'Lambic & Sour',
        },
        {
            value: 'Pale Ale',
            label: 'Pale Ale',
        },
        {
            value: 'Belgian Ale',
            label: 'Belgian Ale',
        },
        {
            value: 'English Bitter',
            label: 'English Bitter',
        },
        {
            value: 'Porter',
            label: 'Porter',
        },
        {
            value: 'Scottish Ale',
            label: 'Scottish Ale',
        },
        {
            value: 'Stout',
            label: 'Stout',
        },
        {
            value: 'Brown Ale',
            label: 'Brown Ale',
        },
              
    ]


      const [fruta, setFrutas] = useState('Siriguela');
      const [estilos, setEstilo] = useState('');
      const [amargor, setAmargor] = useState(2);
      const [aroma, setAroma] = useState('');
      const classes = useStyles();

	return (
		<PaperContainer >
			<Typography variant="h4">Agora você vai aprender a fazer a sua cerveja!</Typography>
			<Grid container style={{ marginTop: 50}}>
				<Grid style={{ marginTop: 20 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						1. O primeiro passo é escolher o estilo. Ele determina a intensidade
					</Typography>
                    <Grid className={classes.btn}>
                    {estilo.map((option) => (
            <ButtonFilled  className={classes.item} key={option.value} value={option.value} 
            radio
            onChange={(e)=>{console.log(e.target.value)}}>
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
                        label="Fruta"
                        value={fruta}
                        onChange={(e) => {setFrutas(e.target.value)
                        console.log(e.target.value)}}
                        SelectProps={{
                            native: true,
                        }}
                        variant="outlined"
                        inputProps={{ style: { width: '450px' } }}
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
                    <Selector
                        value={amargor}
                        min={1}
                        step={1}
                        max={3}
                        onChange={(e) => {setAmargor(e.target.value)
                             console.log(e.target.value)}}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                    />

				</Grid>
                <Grid style={{ marginTop: 50 }} item xs={12}>
					<Typography variant="h5" style={{ color: ' #6b362c' }}>
						4. O lúpulo também é responsável pelo aroma. Qual o nível de aroma você prefere?
					</Typography>
                    <Selector
                     value={aroma}
                     min={1}
                     step={1}
                     max={3}
                     onChange={(e) => {setAroma(e.target.value)
                          console.log(e.target.value)}}
                    />
				</Grid>
                <ButtonFilled style={{ margin: 'auto' }} onClick={() => {console.log('clicked')}}> Submit</ButtonFilled>
			</Grid>
		</PaperContainer>
	);
};

export default MontarCerveja;
