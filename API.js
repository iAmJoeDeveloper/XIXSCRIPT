async function loadData(keyword) {
	const API = await fetch(`https://swapi.dev/api/${keyword}/`)
	const data = await API.json()
	console.log(data)
	return data
}

export default loadData
