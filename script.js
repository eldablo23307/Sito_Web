async function getData() {
	const response = await fetch("https://eldablo2307.pythonanywhere.com/getData")
	const data = await response.text()
	return data
}
async function main() {
	let risultato = await getData()
		
}

main()
