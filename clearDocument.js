function clearDocument(father) {
	let child = father.lastElementChild

	while (child) {
		father.removeChild(child)
		child = father.lastElementChild
	}
}

export default clearDocument
