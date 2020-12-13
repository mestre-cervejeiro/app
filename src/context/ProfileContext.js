import createDataContext from './createDataContext';

// import brewApi from '../api/brewApi';

const profileReducer = (state, action) => {
	switch (action.type) {
		case 'login':
			return {
				...state,
				name: action.payload.name,
				state: action.payload.state,
				gender: action.payload.gender,
				age: action.payload.age
			};

		case 'save_brewery':
			return { ...state, breweryName: action.payload.name, family: action.payload.family };
		default:
			return state;
	}
};

const saveUser = (dispatch) => {
	return async ({ name, state, age, gender }) => {
		console.log('user is saved');
		const user = { name, state, age, gender };
		dispatch({ type: 'login', payload: user });
		// try {
		// 	const response = await brewApi.post('/account/login', {
		// 		name,
		// 		state,
		// 		age,
		// 		gender,
		//		education
		// 	});
		// 	console.log(response);
		// } catch (err) {
		// 	dispatch({
		// console.log(err.message)
		// 	});
		// }
	};
};
const saveBrewery = (dispatch) => {
	return async ({ name, family }) => {
		console.log('brewery is saved');
		const brewery = { name, family };
		dispatch({ type: 'save_brewery', payload: brewery });
		// try {
		// 	const response = await brewApi.post('/account/login', {
		// 		name
		// family
		// 	});
		// 	console.log(response);
		// } catch (err) {
		// 	dispatch({
		// console.log(err.message)
		// 	});
		// }
	};
};

export const { Provider, Context } = createDataContext(
	profileReducer,
	{
		saveUser,
		saveBrewery
	},
	{
		name: 'Amanda',
		state: '',
		gender: '',
		age: '',
		breweryName: 'TinderBrews',
		family: 'Lager'
	}
);
