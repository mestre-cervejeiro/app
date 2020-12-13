import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Landing from './screens/Landing';
import DashboardContainer from './screens/DashboardContainer';
import CompleteProfile from './screens/CompleteProfile';
import MontarCervejaria from './screens/MontarCervejaria';
import MontarCerveja from './screens/MontarCerveja';
import CervejaCriada from './screens/CervejaCriada';
import './App.css';
require('typeface-abeezee');

const theme = createMuiTheme({
	typography: {
		fontFamily: 'ABeeZee'
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/dashboard" exact component={DashboardContainer} />
					<Route path="/completeprofile" exact component={CompleteProfile} />
					<Route path="/montarcervejaria" exact component={MontarCervejaria} />
					<Route path="/montarcerveja" exact component={MontarCerveja} />
					<Route path="/yourbeer" exact component={CervejaCriada} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
