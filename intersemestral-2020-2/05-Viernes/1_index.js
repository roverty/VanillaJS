// console.log('It Works!!!');

const header = document.createElement('h1');
document.body.append(header);
document.body.style.background = "papayawhip";

// console.log(header);
header.innerHTML = "<span style='color: DeepSkyBlue'>Hello world, Im learning </span> <span class='header_span'>JavaScript</span>";


const skill = document.getElementById('skill');
const clickme = document.getElementById('myButton');
const skills = ['JavaScript', 'Python', 'DevOps', 'PHP', 'Laravel', 'Angular', 'React', 'Vue', 'C'];

skill.className = 'header_span';

function randomSkills() {
	let randomSkill = skill.innerHTML;
	while ( skill.innerHTML == randomSkill) {
		randomSkill = skills[Math.floor(Math.random()*skills.length)];
	}
	return randomSkill;
}

clickme.addEventListener('click', ()=> {
	// console.log(skill.innerHTML)
	skill.innerHTML = randomSkills();
});
