let bulletArray = []
let bulletId = 0

const findBullet = function(id){
  return document.querySelector(`[data-bullet="${id}"]`)
}
const bulletPositionX = function(id){
  let bullet = findBullet(id)
  return parseInt(bullet.style.left.replace('px', ''))
}
const bulletPositionY = function(id){
  let bullet = findBullet(id)
  return parseInt(bullet.style.top.replace('px',''))
}

const bulletCollisionCheck = function(bulletId,enemyId){
  bullet = findBullet(bulletId)
  enemy = findEnemy(enemyId)
  return!(
        ((bulletPositionY(bulletId) + parseInt(bullet.style.height)) < (enemyPositionY(enemyId))) ||
        (bulletPositionY(bulletId) > (enemyPositionY(enemyId) + parseInt(enemy.style.height))) ||
        ((bulletPositionX(bulletId) + parseInt(bullet.style.width)) < enemyPositionX(enemyId)) ||
        (bulletPositionX(bulletId) > (enemyPositionX(enemyId) + parseInt(enemy.style.width))));

}


const bulletCollisionReturn = function(bulletId,enemyId){
  bullet = findBullet(bulletId)
  enemy = findEnemy(enemyId)
  let enemyX = enemyPositionX(enemyId)
  let enemyY = enemyPositionY(enemyId)
  if (bulletCollisionCheck(bulletId,enemyId)){
    findEnemy(enemyId).remove()
    Enemy.clearEnemy(enemyId)
    clearInterval()
    bulletArray = Bullet.all().filter(bullet => bullet.id != bulletId)
    Player.last().score++
    setX()
    console.log(Player.last().score)
    console.log(bulletArray)
    console.log(enemy)
    bullet.remove()
    deadFlyRender(enemyY,enemyX)



  }

}



class Bullet{
  constructor(){
  this.id = ++bulletId
  bulletArray.push(this)
  }

  static all(){
    return bulletArray
  }

  renderBullet(){
    let gameScreen = document.getElementById('game-screen')
    const shot = document.createElement('div')
    shot.className = 'bullet'
    shot.style =`top:${playerPositionY()}px ; left:${playerPositionX()}px`
    shot.style.width = "6px"
    shot.style.height = "6px"
    shot.dataset.bullet = this.id
    gameScreen.appendChild(shot)
  }

  shootLeft(){
    let bullet = findBullet(this.id)
    let bulletId = this.id
    const downInterval = setInterval(() => {
      if (findBullet(this.id) == null){
        clearInterval(downInterval)
      }
      else {
        if (bulletPositionX(this.id) > 8){
         bullet.style.left = `${bulletPositionX(this.id) - 4}px`
         Enemy.all().map(enemy => {bulletCollisionReturn(bulletId,enemy.id)})
       }
        else {
          bullet.remove()
          bulletArray = bulletArray.filter(bullet => bullet.id != this.id)
          clearInterval(downInterval)
         }
       }
     }, 15)}


  shootRight(){

    let bullet = findBullet(this.id)
    let bulletId = this.id
    const downInterval = setInterval(() => {
      if (findBullet(this.id) == null){
        clearInterval(downInterval)
      }
      else{
        if (bulletPositionX(this.id) < 1404){
         bullet.style.left = `${bulletPositionX(this.id) + 4}px`
        Enemy.all().map(enemy => {bulletCollisionReturn(bulletId,enemy.id)})
       }
       else {
          bullet.remove()
          bulletArray = bulletArray.filter(bullet => bullet.id != this.id)
          clearInterval(downInterval)
         }
       }
     }, 15)}
  shootUp(){
    let bullet = findBullet(this.id)
    let bulletId = this.id
    const downInterval = setInterval(() => {
      if (findBullet(this.id) == null){
        clearInterval(downInterval)
      }
      else{
        if (bulletPositionY(this.id) > 8){
         bullet.style.top = `${bulletPositionY(this.id) - 4}px`
         Enemy.all().map(enemy => {bulletCollisionReturn(bulletId,enemy.id)})
       }
        else {
          bullet.remove()
          bulletArray = bulletArray.filter(bullet => bullet.id != this.id)
          clearInterval(downInterval)
         }
       }
     }, 15)}
  shootDown(){
    let bullet = findBullet(this.id)
    let bulletId = this.id
    const downInterval = setInterval(() => {
      if (findBullet(this.id) == null){
        clearInterval(downInterval)
      }
      else{
        if (bulletPositionY(this.id) < 600){
         bullet.style.top = `${bulletPositionY(this.id) + 4}px`
         Enemy.all().map(enemy => {bulletCollisionReturn(bulletId,enemy.id)})
       }
        else {
          bullet.remove()
          bulletArray = bulletArray.filter(bullet => bullet.id != this.id)
          clearInterval(downInterval)
         }
       }
     }, 15)}



}
