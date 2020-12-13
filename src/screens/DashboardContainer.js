import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HouseIcon from '@material-ui/icons/House';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Cervejaria from '../components/Cervejaria';
import Desafio from '../components/Desafio';
import Votacao from '../components/Votacao';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '500px'
	},
	paper: {
		background: 'linear-gradient(0deg, #EDC988 0%, #a05344 100%)',
		padding: 20,
		paddingTop: '2em',
		color: 'white',
		justifyContent: 'center',
		textAlign: 'center',
		height: '100%'
	}
});

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

const DashboardContainer = ({ children }) => {
	const classes = useStyles();
	const [ value, setValue ] = useState(0);

	return (
		<div style={{ justifyContent: 'center', width: '100vw', display: 'flex' }}>
			<div className={classes.container}>
				<div className={classes.paper}>
					<TabPanel style={{ height: '100%' }} value={value} index={0}>
						<Cervejaria />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Desafio />
					</TabPanel>
					<TabPanel style={{ height: '100%' }} value={value} index={2}>
						<Votacao />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<Cervejaria />
					</TabPanel>
					<TabPanel value={value} index={4}>
						<Cervejaria />
					</TabPanel>
				</div>
				<BottomNavigation
					style={{ width: '100%', height: 100, backgroundColor: '#a05344' }}
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
					showLabels
				>
					<BottomNavigationAction
						{...a11yProps(0)}
						style={{ color: 'white' }}
						label="Minha cervejaria"
						icon={<HouseIcon />}
					/>
					<BottomNavigationAction
						{...a11yProps(1)}
						style={{ color: 'white' }}
						label="Desafios"
						icon={<AlarmOnIcon />}
					/>
					<BottomNavigationAction
						{...a11yProps(2)}
						style={{ color: 'white' }}
						label="Votação"
						icon={<AssignmentTurnedInIcon />}
					/>
					<BottomNavigationAction
						{...a11yProps(3)}
						style={{ color: 'white' }}
						label="Ranking"
						icon={<FormatListNumberedIcon />}
					/>
					<BottomNavigationAction
						{...a11yProps(4)}
						style={{ color: 'white' }}
						label="Tutorial"
						icon={<SearchIcon />}
					/>
				</BottomNavigation>
			</div>
		</div>
	);
};

export default DashboardContainer;
