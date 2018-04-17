document.addEventListener("DOMContentLoaded",() =>{
const gameContent = document.getElementById('game-content')
const gameScreen = () => (document.querySelector("#game-screen"))
let bulletArray = []
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
    }).then( e => {
      gameContent.innerHTML = ""
      const gameScreen = document.createElement('div')
      gameScreen.id = 'game-screen'
      gameContent.appendChild(gameScreen)
      }).then(e =>{
      const gameScreen = document.querySelector("#game-screen")
      const player = document.createElement('div')
      player.id = 'player'
      player.style = "top: 300px; left:700px"
      gameScreen.appendChild(player)


    })
    }
  })


EventListener.moveListener()




})
