

const currentPlayer = function(){return document.getElementById('player')}

const playerPositionX =function(){
return parseInt(currentPlayer().style.left.replace("px",""))}

const playerPositionY = function(){
return parseInt(currentPlayer().style.top.replace("px",""))}
let playerArray = []
class Player{
  constructor(name, score = 0, height = 10, width = 5, speed = 4, health = 10){
    this.name = name
    this.score = score
    this.height = height
    this.width = width
    this.speed = speed
    this.health = health
    playerArray.push(this)
  }
   static last(){
    return playerArray[playerArray.length - 1]
  }
  static movePlayerLeft(){

    if (playerPositionX() > 8){
    currentPlayer().style.left = `${playerPositionX() - 4}px`
    }
  }

  static movePlayerRight(){
    if (playerPositionX() < 1404){
    currentPlayer().style.left = `${playerPositionX() + 4}px`
    }
  }

  static movePlayerUp(){
    if (playerPositionY() > 8){
    currentPlayer().style.top = `${playerPositionY() - 4}px`
    }

  }

  static movePlayerDown(){
    if (playerPositionY() < 600){
    currentPlayer().style.top = `${playerPositionY() + 4}px`
    }



  }





}
