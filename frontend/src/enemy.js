let enemyArray = []
let enemyId = 0
let x = 5000
const findEnemy = function(id){
  return document.querySelector(`[data-enemy="${id}"]`)
}
const enemyPositionX = function(id){
  let enemy = findEnemy(id)
  return parseInt(enemy.style.left.replace('px', ''))
}
const enemyPositionY = function(id){
  let enemy = findEnemy(id)
  return parseInt(enemy.style.top.replace('px',''))
}

const randomRange =  function(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
  }
const setX = function () {
  if (Player.last().score < 10){
    x = 5000
  }
  else {
    x = 6000/Math.sqrt(Player.last().score * 10)
  }

}
const enemySpawn = () => { return (setInterval(()=>{
  let protoEnemy = new Enemy
  protoEnemy.renderEnemy()
  if (Player.last().score > 100){
  let protoEnemy = new Enemy
  protoEnemy.renderEnemy()}
  if (Player.last().score > 200){
  let protoEnemy = new Enemy
  protoEnemy.renderEnemy()}
}, 500))}





const enemyCollisionCheck = function(enemyId){
  player = currentPlayer()
  enemy = findEnemy(enemyId)
  return !(
    ((enemyPositionY(enemyId) + parseInt(enemy.style.height)) < (playerPositionY())) ||
    (enemyPositionY(enemyId) > (playerPositionY() + parseInt(player.style.height))) ||
    ((enemyPositionX(enemyId) + parseInt(enemy.style.width)) < playerPositionX()) ||
    (enemyPositionX(enemyId) > (playerPositionX() + parseInt(player.style.width))));

  }


  const enemyCollisionReturn = function(enemyId){
    player = currentPlayer()
    enemy = findEnemy(enemyId)
    if (enemyCollisionCheck(enemyId)){
      findEnemy(enemyId).remove()
      Enemy.clearEnemy(enemyId)
      // clearInterval()
      Player.last().health--
      // debugger;
      console.log(Player.last().health)
      if (Player.last().health === 0){
        Adapter.gameOver(Player.last())
        let gameScreen = document.getElementById('game-screen')
        gameScreen.innerHTML = `<div id="final"><h1>Player: ${Player.last().name}: ${Player.last().score} points</h1></div>`
        clearInterval(enemyInterval())

      }
    }

  }
class Enemy {

static all(){
  return enemyArray
}

constructor(hp = 1, damage = 1, movement = 0){
  this.hp = hp
  this.damage = damage
  this.movement = movement
  this.id = ++enemyId
  enemyArray.push(this)
}



renderEnemy(){
  let gameScreen = document.getElementById('game-screen')
  if (gameScreen){
  const enemy = document.createElement('div')
  enemy.className = 'enemy'
  while (!(Math.abs(parseInt(enemy.style.left)-playerPositionX())>100 && Math.abs(parseInt(enemy.style.top)-playerPositionY()) > 75 )){
    enemy.style =`top:${randomRange(8,600)}px ; left:${randomRange(8,1404)}px`}

  enemy.style.width = "40px "
  enemy.style.height= "20px"
  enemy.style.background = ` url(assets/images/Fly.png) `
  enemy.dataset.enemy = this.id
  gameScreen.appendChild(enemy)
  movementPatterns[this.movement](this.id)

  console.log(findEnemy(this.id))}
}
static clearEnemy(id){
  enemyArray = enemyArray.filter(enemy => enemy.id != id)
}
}

const defaultMovement = (argument) =>{

  let enemy = findEnemy(argument)

  let enemyInterval = setInterval(() => {

    let choiceRange = randomRange(0,6)
    let distanceRange = randomRange(2,4)

      if (findEnemy(argument) == null){
      clearInterval(enemyInterval)}
      else{
        if (playerPositionX() - enemyPositionX(argument) <= 0){
          enemyCollisionReturn(argument)
          if(enemyPositionX(argument) >= 8 && choiceRange === 1){////leftmove
            enemy.style.left = `${enemyPositionX(argument) - distanceRange}px`
          }
        }
        else if(enemyPositionX(argument) <= 1398 && choiceRange === 2) {////rightmove
            enemy.style.left = `${enemyPositionX(argument) + distanceRange}px`
          }
        if (playerPositionY() - enemyPositionY(argument) <= 0){
          if(enemyPositionY(argument) >= 8 && choiceRange === 4){
            enemy.style.top = `${enemyPositionY(argument) - distanceRange}px`
          }
        }
        else if(enemyPositionY(argument) <= 596 && choiceRange === 5){
          enemy.style.top = `${enemyPositionY(argument) + distanceRange}px`
        }
      }


      }, 1)
    }

const movementPatterns = [defaultMovement]
