import createDataContext from './createDataContext';
// import brewApi from '../api/brewApi';

const beerReducer = (state, action) => {
	switch (action.type) {
		case 'get_beers':
			return action.payload;

		case 'add_beer':
			return [
				...state,

				{
					id: `${Math.floor(Math.random() * 99999999)}`,
					estilo: action.payload.estilo,
					fruta: action.payload.fruta,
					aroma: action.payload.aroma,
					amargor: action.payload.amargor
				}
			];
		default:
			return state;
	}
};

const getBeers = (dispatch) => {
	return async () => {
		console.log('ranking');
		// const response = await brewApi.get('/ranking');
		// dispatch({ type: 'get_beers', payload: response.data });
	};
};

const addBeer = (dispatch) => {
	return async ({ estilo, fruta, aroma, amargor, time, challenge }) => {
		console.log('add cerveja');
		const beer = { estilo, fruta, aroma, amargor, time, challenge };
		dispatch({ type: 'add_beer', payload: beer });
		// await jsonServer.post('/createbeer', { title, content });
		// dispatch({ type: "add_beerpost", payload: { title, content } });
	};
};

export const { Context, Provider } = createDataContext(beerReducer, { addBeer, getBeers }, [
	{
		id: 1,
		estilo: 'Stout',
		fruta: 'amora',
		aroma: 3,
		amargor: 1,
		time: 'Ale',
		challenge: 1
	}
]);
