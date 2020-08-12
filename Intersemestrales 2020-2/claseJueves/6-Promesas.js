const data = require('./dataFunction');

const API = 'https://pokeapi.co/api/v2/pokemon/1';

console.log('start');
data(API)
	.then((response) => {
		console.log(`Tu pokemon es ${response.name}`);
		return data(response.location_area_encounters);
	})
	.then((response) => {
		console.log(`Su primer encuentro fue en ${response[0].location_area.name}`);
		return data(response[0].location_area.url)
	})
	.then((response) => {
		console.log(`El id es ${response.id}`)
	})
	.catch((error) => {
		console.log(error);
	});

console.log('End');