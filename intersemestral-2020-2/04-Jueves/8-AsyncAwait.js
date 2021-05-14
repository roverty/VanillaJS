const data = require('./dataFunction');
const API = 'https://pokeapi.co/api/v2/pokemon/1';

const main = async () => {
	try {
		const firstReq = await data(API);
		const secondReq = await data(firstReq.location_area_encounters);
		const thirdReq = await data(secondReq[0].location_area.url);

		console.log(firstReq.name);
		console.log(secondReq[0].location_area.name);
		console.log(thirdReq.id);
	} catch (err) {
		console.log(err);
	}
}

main();