// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))

async function loadData() {
	const API = await fetch('https://swapi.dev/api/people/')
	const data = await API.json()
	console.log(data)
	return data
}

async function getMovies() {
	const movieListBox = document.getElementById('movieList')

	const respuestas = await loadData()

	console.log(respuestas.results)

	respuestas.results.forEach((respuesta) => {
		const title = document.createElement('h4')
		const hairColor = document.createElement('p')

		title.innerHTML = respuesta.name
		hairColor.innerHTML = respuesta.hair_color
		movieListBox.append(title)
		movieListBox.append(hairColor)
	})
}

getMovies()
