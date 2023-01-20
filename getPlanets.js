import clearDocument from './clearDocument.js'
import loadData from './API.js'

async function getPlanets(father) {
	clearDocument(father)

	const respuestas = await loadData('planets')

	respuestas.results.forEach((respuesta) => {
		const title = document.createElement('li')

		title.innerHTML = respuesta.name
		title.classList.add('list-disc', 'mb-8')

		father.append(title)
	})
}

export default getPlanets
