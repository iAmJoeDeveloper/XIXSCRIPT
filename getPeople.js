import clearDocument from './clearDocument.js'
import loadData from './API.js'

async function getPeople(father) {
	clearDocument(father)

	const respuestas = await loadData('people')

	respuestas.results.forEach((respuesta) => {
		const title = document.createElement('li')
		const hairColor = document.createElement('p')

		title.innerHTML = respuesta.name
		hairColor.innerHTML = respuesta.hair_color
		hairColor.classList.add('list-disc', 'mb-8')

		father.append(title)
		father.append(hairColor)
	})
}

export default getPeople
