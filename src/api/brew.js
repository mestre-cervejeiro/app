import axios from 'axios';

const brewApi = axios.create({
	baseURL: `localhost:3002`
});

export default brewApi;
