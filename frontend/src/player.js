
class Player{
  constructor(name,score = 0,height = 10,width = 5,speed = 4){
    this.name = name
    this.score = score
    this.height = height
    this.width = width
    this.speed = speed
  }

  movePlayerLeft(){
    const PLAYER = document.getElementById('player')
    var leftmovement = PLAYER.style.left.replace('px','')
    var left = parseInt(leftmovement, 10)
    if (PLAYER.offsetLeft + this.width < 690){
      PLAYER.style.left = `${left - this.speed}px`
    }
  }

  static movePlayerRight(){
    const PLAYER = document.getElementById('player')
    var leftmovement = PLAYER.style.left.replace('px','')
    var left = parseInt(leftmovement, 10)
    if (PLAYER.offsetLeft > 10){
        PLAYER.style.left = `${left + this.speed}px`
    }
  }

  static movePlayerUp(){
    
  }

  static movePlayerDown(){

  }

  static movePlayerUpRight(){

  }

  static movePlayerUpLeft(){

  }

  static movePlayerDownRight(){

  }

  static movePlayerDownLeft(){

  }




}
