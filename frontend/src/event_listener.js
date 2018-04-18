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
    let bullet = new Bullet
    bullet.renderBullet()
    bullet.shootDown()
  }
  else if (key[65]){
    let bullet = new Bullet
    bullet.renderBullet()
    bullet.shootLeft()
  }
  else if (key[68]){
    let bullet = new Bullet
    bullet.renderBullet()
    bullet.shootRight()
  }
  else if (key[87]){
    let bullet = new Bullet
    bullet.renderBullet()
    bullet.shootUp()
  }
}



}
