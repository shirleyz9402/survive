setInterval(()=>{
if (document.querySelector('#player')){
playerSprite()}}, 1
)

const deadFlyRender = function(enemyY,enemyX){
  const dead = document.createElement('div')
  dead.style.top = `${enemyY}px`
  dead.style.left = `${enemyX}px`
  dead.style.width = "40px"
  dead.style.height = "20px"
  dead.style.position = "absolute"

  dead.style.background = `url(assets/images/Flyd1.png)`
  document.querySelector("#game-screen").appendChild(dead)
  setTimeout(()=>{dead.style.background = ` url(assets/images/Flyd2.png)`
    setTimeout(()=>{dead.style.background = ` url(assets/images/Flyd3.png)`
      setTimeout(()=>{dead.style.background = ` url(assets/images/Flyd4.png)`},250)
    },250)
  },250)
}
