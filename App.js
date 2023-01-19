// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
const movieListBox = document.getElementById('movieList')

async function loadData(keyword) {
	const API = await fetch(`https://swapi.dev/api/${keyword}/`)
	const data = await API.json()
	console.log(data)
	return data
}

async function getPeople() {
	clearDocument()

	const respuestas = await loadData('people')

	respuestas.results.forEach((respuesta) => {
		const title = document.createElement('li')
		const hairColor = document.createElement('p')

		title.innerHTML = respuesta.name
		hairColor.innerHTML = respuesta.hair_color
		hairColor.classList.add('list-disc', 'mb-8')

		movieListBox.append(title)
		movieListBox.append(hairColor)
	})
}

async function getPlanets() {
	clearDocument()

	const respuestas = await loadData('planets')

	respuestas.results.forEach((respuesta) => {
		const title = document.createElement('li')

		title.innerHTML = respuesta.name
		title.classList.add('list-disc', 'mb-8')

		movieListBox.append(title)
	})
}

function clearDocument() {
	console.log(movieListBox)
	movieListBox.removeChild(title)
}

const bGetMovies = document.getElementById('Getmovies')
const bGetPlanets = document.getElementById('getPlanets')

bGetMovies.addEventListener('click', getPeople)
bGetPlanets.addEventListener('click', getPlanets)
