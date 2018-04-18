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

let bulletArray = []
let bulletId = 0
class Bullet{
  constructor(){
  this.id = ++bulletId
  bulletArray.push(this)
  }

  renderBullet(){
    let gameScreen = document.getElementById('game-screen')
    const shot = document.createElement('div')
    shot.className = 'bullet'
    shot.style =`top:${playerPositionY()}px ; left:${playerPositionX()}px`
    shot.dataset.bullet = this.id
    gameScreen.appendChild(shot)
  }

  shootLeft(){
    console.log('hi')
    let bullet = findBullet(this.id)
      const downInterval = setInterval(() => {
        if (bulletPositionX(this.id) > 8){
         bullet.style.left = `${bulletPositionX(this.id) - 2}px`}
        else {
          bullet.remove()
          bulletArray = bulletArray.filter(bullet => bullet.id != this.id)
          clearInterval(downInterval)
         }
       }, 1)
    }

  shootRight(){
    let bullet = findBullet(this.id)
    const downInterval = setInterval(() => {
      if (bulletPositionX(this.id) < 1408){
       bullet.style.left = `${bulletPositionX(this.id) + 2}px`}
      else {
        bullet.remove()
        bulletArray = bulletArray.filter(bullet => bullet.id != this.id)
        clearInterval(downInterval)
       }
     }, 1)
  }
  shootUp(){
    let bullet = findBullet(this.id)
      const downInterval = setInterval(() => {
        if (bulletPositionY(this.id) > 8){
         bullet.style.top = `${bulletPositionY(this.id) - 2}px`}
        else {
          bullet.remove()
          bulletArray = bulletArray.filter(bullet => bullet.id != this.id)
          clearInterval(downInterval)
         }
       }, 1)

  }
  shootDown(){
    let bullet = findBullet(this.id)
    const downInterval = setInterval(() => {
      if (bulletPositionY(this.id) < 600){
       bullet.style.top = `${bulletPositionY(this.id) + 2}px`}
      else {
        bullet.remove()
        bulletArray = bulletArray.filter(bullet => bullet.id != this.id)
        clearInterval(downInterval)
       }
     }, 1)
  }



}
