let enemyArray = []
let enemyId = 0
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

const enemyInterval = function(){ setInterval(()=>{
  let protoEnemy = new Enemy
  protoEnemy.renderEnemy()
},4000)}

enemyInterval()

class Enemy {

static all(){
  return enemyArray}


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
  enemy.style =`top:${randomRange(8,600)}px ; left:${randomRange(8,1404)}px`
  enemy.style.width = "20px "
  enemy.style.height= "30px"
  enemy.innerHTML = `<img class="image" src="/Users/arbi/Documents/Projects/Personal Projects/survive/frontend/assets/images/fly.png" >`
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
        if(enemyPositionX(argument) >= 8 && choiceRange === 1){////leftmove
          enemy.style.left = `${enemyPositionX(argument) - distanceRange}px`
          }
        else if(enemyPositionX(argument) <= 1398 && choiceRange === 2) {////rightmove
            enemy.style.left = `${enemyPositionX(argument) + distanceRange}px`
          }

        if(enemyPositionY(argument) >= 8 && choiceRange === 4){
          enemy.style.top = `${enemyPositionY(argument) - distanceRange}px`
        }
        else if(enemyPositionY(argument) <= 596 && choiceRange === 5){
          enemy.style.top = `${enemyPositionY(argument) + distanceRange}px`
        }}


      }, 1)
    }

const movementPatterns = [defaultMovement]
