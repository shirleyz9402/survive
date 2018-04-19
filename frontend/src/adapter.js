class Adapter{
  static gameOver(player){
    console.log(player.score)
    console.log(typeof player.score)

    let dbPlayer = null
    fetch(`http://localhost:3000/api/v1/players`).then(players => players.json()).then(players => {
      dbPlayer = players.find(p => p.name === player.name)
    }).then(players => {

    fetch(`http://localhost:3000/api/v1/players/${dbPlayer.id}`, {
      method: "PATCH",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({score: player.score})
    })
  })

  }

}

  // function renderLeaderBoard(){
  //     return `
  //     <div id="leader-board">
  //       <table id="board">
  //         <tr>
  //           <th>Player Name</th>
  //           <th>Score</th>
  //         </tr>
  //       </table>
  //     </div>
  //     `
  // }
