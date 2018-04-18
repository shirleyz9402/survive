const findEnemy = function(id){
  return document.querySelector(`#enemy-${id}`)
}
const enemyPositionX = function(id){
  let enemy = findBullet(id)
  return parseInt(enemy.style.left.replace('px', ''))
}
const enemyPositionY = function(id){
  let enemy = findBullet(id)
  return parseInt(enemy.style.top.replace('px',''))
}


class Movement {
  constructor(enemy){
    this.enemy = enemy
    this.assignMovement()

  }
  assignMovement(){
    this.enemy.movement = defaultMovement()
  }
  defaultMovement(){
    let enemy = findEnemy(this.enemy.id)
    setInterval(() => {
      if(enemyPositionX(this.enemy.id) > 8){
        enemy.style.left = `${bulletPositionX(this.id) - 2}px`
        }
      else {
          enemy.style.left = `${bulletPositionX(this.id) + 2}px`
        }
      }, 1)
    }
  }
