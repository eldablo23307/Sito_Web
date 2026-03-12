let message;
fetch('https://eldablo2307.pythonanywhere.com/getData')
  .then(response => response.json())
  .then(data => message)
  .catch(error => console.error('Error:', error));

console.log(message)
