class Adapter{
  static gameOver(player){
    fetch(`http://localhost:3000/api/v1/players/${player.id}`, {
      method: "PATCH",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({score: player.score})
    }).then(fetch(`http://localhost:3000/api/v1/players`)).then(players => players.json()).then(players => players.forEach(player => {
      let gameScreen = document.querySelector("#game-screen")
      gameScreen.innerHTML = renderLeaderBoard()
      let board = document.getElementById('board')
      board.innerHTML += `<tr>
        <td>${player.name}</td>
        <td>${player.score}</td>
      </tr>`

    }))
  }

}

  function renderLeaderBoard(){
      return `
      <div id="leader-board">
        <table id="board">
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </table>
      </div>
      `
  }
