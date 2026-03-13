async function getData() {
	const response = await fetch("https://eldablo2307.pythonanywhere.com/getData")
	const data = await response.json()
	return data
}
async function main() {
	let risultato = await getData()
	let GuestBookMessage = document.getElementById("GuestBookMessage")
	for (let i = 0; i < risultato.length; i++) {
		let url = document.createElement('a')
		url.href = risultato[i].url
		url.textContent = "User: " + risultato[i].url
		let hr = document.createElement('hr')
		let message = document.createElement('p')
		message.textContent = risultato[i].message
		let newMessage = document.createElement('div')
		newMessage.classList.add("GuestBookMessageAppended")
		newMessage.appendChild(url)
		newMessage.appendChild(hr)
		newMessage.appendChild(message)
		GuestBookMessage.appendChild(newMessage)
	}	
}

main()
