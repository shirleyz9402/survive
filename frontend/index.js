document.addEventListener("DOMContentLoaded",() =>{
const gameContent = document.getElementById('game-content')
  function renderForm(){
    return `<form id="create-player">
    <label for="new-player-name">Name: </label>
    <input required type="text" id="new-player-name" name="new-player-name" placeholder="name"><br>
    <button type="submit" id="create-note">Create Player</button>
    </form>
    `
  }
  gameContent.innerHTML = renderForm()



})
