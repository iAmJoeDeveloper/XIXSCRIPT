// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
import getPeople from './getPeople.js'
import getPlanets from './getPlanets.js'

const father = document.getElementById('movieList')

const bGetPeople = document.getElementById('getPeople')
const bGetPlanets = document.getElementById('getPlanets')

bGetPeople.addEventListener('click', () => {
	getPeople(father)
})
bGetPlanets.addEventListener('click', () => {
	getPlanets(father)
})
