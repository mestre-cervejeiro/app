import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import female from '../assets/female.svg'
import male from '../assets/male.svg'
import boy from '../assets/boy.svg'
import win from '../assets/win.png'
import StarIcon from '@material-ui/icons/Star';

const Ranking = () => {
	return (
		<div>
			<Grid container style={{ justifyContent: 'center', width: '411px' }}>
                <Box style={{width: 400, display: 'flex', flexDirection: 'row',
                    alignContent: 'center'}}>
                    <img style={{ width: '6em', margin: '1em' }} src={female} alt='avatar'/>
                    <Grid style={{  marginTop: '3em' }}>
                        <Typography  variant="h6" style={{color:'#49261E', fontWeight: 'bold'}}>Anaíle Duarte </Typography><br></br> 
                        <Typography style={{color: '#505050', marginTop: -20}} >1250 pontos</Typography>
                    </Grid>
                </Box>
                <Box style={{width: 400, display: 'flex', flexDirection: 'row'}}>
                    <img style={{ width: '5em', margin: '1em' }} src={male} alt='avatar'/>
                    <Grid style={{  marginTop: '3em', width: 200 }}>
                        <Typography  variant="h6" style={{color:'#312F4E', fontWeight: 'bold', marginLeft:-90, marginTop:-10}}>Gabriel </Typography><br></br> 
                        <Typography style={{color: '#505050', marginTop: -30}} >1° <img src={win} alt='win'
                        style={{width:'5%', marginLeft:0 }}/> 4.553 pontos <StarIcon style={{fontSize:'medium', marginTop:10, color:'#A25645'}}/></Typography>
                    </Grid>
                </Box>
                <Box style={{width: 400, display: 'flex', flexDirection: 'row'}}>
                    <img style={{ width: '5em', margin: '1em' }} src={female} alt='avatar'/>
                    <Grid style={{  marginTop: '3em', width: 200 }}>
                        <Typography  variant="h6" style={{color:'#312F4E', fontWeight: 'bold', marginLeft:-90, marginTop:-10}}>Júlia </Typography><br></br> 
                        <Typography style={{color: '#505050', marginTop: -30}} >2° <img src={win} alt='win'
                        style={{width:'5%', marginLeft:0 }}/> 3.983 pontos <StarIcon style={{fontSize:'medium', marginTop:10, color:'#A25645'}}/></Typography>
                    </Grid>
                </Box>
                <Box style={{width: 400, display: 'flex', flexDirection: 'row'}}>
                    <img style={{ width: '5em', margin: '1em' }} src={boy} alt='avatar'/>
                    <Grid style={{  marginTop: '3em', width: 200 }}>
                        <Typography  variant="h6" style={{color:'#312F4E', fontWeight: 'bold', marginLeft:-90, marginTop:-10}}>Diego </Typography><br></br> 
                        <Typography style={{color: '#505050', marginTop: -30}} >3° <img src={win} alt='win'
                        style={{width:'5%', marginLeft:0 }}/> 3.503 pontos <StarIcon style={{fontSize:'medium', marginTop:10, color:'#A25645'}}/></Typography>
                    </Grid>
                </Box>
                <Box style={{width: 400, display: 'flex', flexDirection: 'row'}}>
                    <img style={{ width: '5em', margin: '1em' }} src={male} alt='avatar'/>
                    <Grid style={{  marginTop: '3em', width: 200 }}>
                        <Typography  variant="h6" style={{color:'#312F4E', fontWeight: 'bold', marginLeft:-90, marginTop:-10}}> Lucas </Typography><br></br> 
                        <Typography style={{color: '#505050', marginTop: -30}} >4° <img src={win} alt='win'
                        style={{width:'5%', marginLeft:0 }}/> 3.203 pontos <StarIcon style={{fontSize:'medium', marginTop:10, color:'#A25645'}}/></Typography>
                    </Grid>
                </Box>
                <Box style={{width: 400, display: 'flex', flexDirection: 'row'}}>
                    <img style={{ width: '5em', margin: '1em' }} src={boy} alt='avatar'/>
                    <Grid style={{  marginTop: '3em', width: 200 }}>
                        <Typography  variant="h6" style={{color:'#312F4E', fontWeight: 'bold', marginLeft:-90, marginTop:-10}}> André </Typography><br></br> 
                        <Typography style={{color: '#505050', marginTop: -30}} >5° <img src={win} alt='win'
                        style={{width:'5%', marginLeft:0 }}/> 3.190 pontos <StarIcon style={{fontSize:'medium', marginTop:10, color:'#A25645'}}/></Typography>
                    </Grid>
                </Box>
			</Grid>
		</div>
	);
};

export default Ranking;

