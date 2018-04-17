let key = []

class EventListener{


static moveListener(){
  document.addEventListener('keydown', EventListener.keyPressed)
  document.addEventListener('keyup', EventListener.keyReleased)
}
static keyPressed(e){
key[e.which] = true
EventListener.currentMoves()
}

static keyReleased(e){
key[e.which] = false
}

static currentMoves(){
  console.log()
  if (key[37]){
    Player.movePlayerLeft()
  }
  if (key[38]){
    Player.movePlayerUp()
  }
  if (key[39]){
    Player.movePlayerRight()
  }
  if (key[40]){
    Player.movePlayerDown()
  }
  if (key[83]){
    Player.shootDown()
  }
  if (key[65]){
    Player.shootLeft()
  }
  if (key[68]){
    Player.shootRight()
  }
  if (key[87]){
    Player.shootUp()
  }
}



}
