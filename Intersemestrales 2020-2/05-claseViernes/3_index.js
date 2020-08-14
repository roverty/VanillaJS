//const id = prompt('Quien es el pokemon');

async function search(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const pokemon = await response.json();

	return pokemon;
}

let pokemonName;

async function render(id) {

	const data = await search(id);
	
	const pokemon = document.createElement('img');
	
	pokemon.setAttribute('src', data.sprites.front_default);
	pokemonName = data.name;
	console.log(data.name);

	document.body.append(pokemon);	
}

render(Math.floor(Math.random()*650));

const input = document.createElement('input');
const header = document.createElement('h1');
const subHeader = document.createElement('h2');
const button = document.createElement('button');

header.innerHTML = "Quien es este pokemon?";
button.innerText = 'Intentar de nuevo';

document.body.append(header);
document.body.append(input);

input.addEventListener('keyup', function(event) {
	
	if (event.key === "Enter") {
	//	console.log(event);
		if (pokemonName.toLowerCase() == input.value.toLowerCase()) {
			subHeader.innerHTML = "Felicidades, eres un maestro pokemon";
		} else {
			subHeader.innerHTML = `Perdiste, el nombre correcto es ${pokemonName}`;
		}
	
	document.body.append(subHeader);
	document.body.append(button);
	input.value = '';
	}
});

button.addEventListener('click', function(event) {
	window.location.reload();
});