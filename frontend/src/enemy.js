let enemyArray = []
let enemyId = 0

const randomRange =  function(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
  }

const enemyInterval = function(){ setInterval(()=>{
  let protoEnemy = new Enemy
  protoEnemy.renderEnemy()
},4000)}

enemyInterval()

class Enemy {


constructor(hp = 1, damage = 1, movement = function(){}){
  this.hp = hp
  this.damage = damage
  this.movement = movement
  this.id = ++enemyId
  enemyArray.push(this)
}

renderEnemy(){
  let gameScreen = document.getElementById('game-screen')
  const enemy = document.createElement('div')
  enemy.className = 'enemy'
  enemy.style =`top:${randomRange(8,600)}px ; left:${randomRange(8,1404)}px`
  enemy.dataset.enemy = this.id
  gameScreen.appendChild(enemy)
}
}
