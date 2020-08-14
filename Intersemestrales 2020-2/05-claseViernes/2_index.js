const id = prompt('Quien es el pokemon');

async function search(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const pokemon = await response.json();

	return pokemon;
}

async function render(id) {

	const data = await search(id);
	
	const pokemon = document.createElement('img');
	const header = document.createElement('h1');

	pokemon.setAttribute('src', data.sprites.front_default);
	header.innerHTML = data.name;

	document.body.append(header);
	document.body.append(pokemon);	
}

render(id);
