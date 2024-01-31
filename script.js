import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Arrow } from "./flecha.js"

var board = document.querySelector("#board");

let play = document.getElementById('try');
play.addEventListener('click', _ => {
  document.getElementById("gameStart").style.visibility = "hidden"
   gameStart();  
})
var arrEnemies = []
var player = new Player ()
var arrowDirection = 0

 var checkDeath ;
 var enemyIntervalId;

 document.addEventListener("keydown", function (event) {
   if (event.key === "d" || event.key === "D") {
    arrowDirection = player.rotation(90);
    } else if (event.key === "a" || event.key === "A") {
      arrowDirection = player.rotation(-90);
    }
    if (event.key === " " ) {  
      var arrow = new Arrow (345, 320, arrowDirection, arrEnemies, board)
      arrow.insertArrow()

      if (arrow.canShoot()){
        arrow.shootArrow();
    }
    }

    });

function gameStart() {

  checkDeath = setInterval(gameOver, 50)
  enemyIntervalId = setInterval(createEnemy, 2000);

}

function gameOver() {
  if (player.isDead) {
  
    clearInterval(enemyIntervalId) 
    arrEnemies.forEach(function(enemy){ 
      enemy.removeEnemy()
    })
    document.getElementById("gameOver").style.visibility="visible"
    }
  }

function createEnemy() {

  var startPosition = Math.floor(Math.random() * 4) + 1;
 
  let enemy;
  switch (startPosition) {
    case 1:
      enemy = new Enemy(300, 650, board, 0, player);
      enemy.insertEnemy()
      arrEnemies.push(enemy)

      break;
    case 2:
      enemy = new Enemy(0, 325, board, 90, player)
      enemy.insertEnemy();
      arrEnemies.push(enemy)
      break;
    case 3:
      enemy = new Enemy(300, 0, board, 180, player)
      enemy.insertEnemy()
      arrEnemies.push(enemy)

      break;
      case 4:
       enemy = new Enemy(600, 325, board, 270, player)
       enemy.insertEnemy();
       arrEnemies.push(enemy)
        break;
      } 
}


let refresh = document.getElementById('retry');
refresh.addEventListener('click', _ => {
  gameStart();  
   location.reload();

})

