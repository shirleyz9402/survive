let key = []

class EventListener{


static moveListener(){
  document.addEventListener('keydown', EventListener.keyPressed)
  document.addEventListener('keyup', EventListener.keyReleased)
}
static allKey(){
  return key
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

let playerSpriteRender = "-2px -144px"
let step = true
const playerSprite = ()=> {
  if(key[38]){
    //// run up
    console.log("up")
    if (step === true){
      step = false
     playerSpriteRender = "-49px -144px"
    }
    else{
      step =true
      playerSpriteRender = "-32px -128px"
    }
  }
  else if(key[40]){
      //// run down
      console.log("down")
    if (step === true){
      step = false
     playerSpriteRender = "-80px -128px"
    }
    else{
      step = true
      playerSpriteRender = "0 -144px"
    }
  }
  else if(key[39]){
      //// run right
      console.log("right")
    if (step === true){
      step = false
     playerSpriteRender = "-16px -144px"
    }
    else{
      step = true
      playerSpriteRender = "-32px -144px"
      ////check this
    }
  }
  else if(key[37]){
          //// run left
          console.log("left")
    if (step === true){
      step = false
     playerSpriteRender = "-64px -129px"
    }
    else{
      step = true
      playerSpriteRender = "-48px -129px"
    }
  }
  else {playerSpriteRender = "-2px -144px"}
  console.log("assignment")
  document.querySelector("#player").style.background = ` url(/Users/shirleyzhang/Development/code/survive/frontend/assets/images/VictimsAndVillagers.png) ${playerSpriteRender}`

}
