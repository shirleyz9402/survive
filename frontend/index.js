document.addEventListener("DOMContentLoaded",() =>{
const gameContent = document.getElementById('game-content')
const createPlayer = document.getElementById('create-player')
  function renderForm(){
    return `
    <label for="name">Name: </label>
    <input required type="text" id="name" name="new-player-name" placeholder="name"><br>
    <button type="button" id="create-player">Create Player</button>
    `
  }
  gameContent.innerHTML = renderForm()

  gameContent.addEventListener('click', e => {
    if (e.target.id === 'create-player'){
    let name = document.getElementById('name').value
    fetch('http://localhost:3000/api/v1/players', {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name: name})
    })
    }
  })




})
