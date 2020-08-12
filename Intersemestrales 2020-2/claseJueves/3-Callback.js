const request = require('request');

/*request('https://google.com', function(){
	console.log('Terminé la petición de Google');
});*/

/*request('https://pokeapi.co/api/v2/pokemon/1', function(error, response, body){
	const bodyJSON = JSON.parse(body);
	// console.log(bodyJSON);
	// console.log(error);
	console.log(response.statusCode);
	console.log(`Tu pokemon es ${bodyJSON.name}`);
	console.log('Terminé la petición de Pokemon');
});
*/

request('https://pokeapi.co/api/v2/pokemon/1', function(error, response, body){
	const bodyJSON = JSON.parse(body);
	console.log(`Tu pokemon es ${bodyJSON.name}`);
	
	request(bodyJSON.location_area_encounters, function(error, response, body) {
		const enocuntersJSON = JSON.parse(body);
		console.log(`Su primer encuentro fue en ${enocuntersJSON[0].location_area.name}`);

		request(enocuntersJSON[0].location_area.url, function (err, response, body) {
			const enocuntersMethodJSON = JSON.parse(body);
			console.log(`El id es ${enocuntersMethodJSON.id}`);
		})
	});
});