import { Provider as ProfileProvider } from './context/ProfileContext';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Landing from './screens/Landing';
import DashboardContainer from './screens/DashboardContainer';
import CompleteProfile from './screens/CompleteProfile';
import MontarCervejaria from './screens/MontarCervejaria';
import './App.css';
require('typeface-abeezee');

const theme = createMuiTheme({
	typography: {
		fontFamily: 'ABeeZee'
	}
});

const App = () => {
	return (
		<ProfileProvider>
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/dashboard" exact component={DashboardContainer} />
						<Route path="/completeprofile" exact component={CompleteProfile} />
						<Route path="/montarcervejaria" exact component={MontarCervejaria} />
					</Switch>
				</Router>
			</ThemeProvider>
		</ProfileProvider>
	);
};

export default App;
