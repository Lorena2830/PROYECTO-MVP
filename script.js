import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

var board = document.querySelector("#board");

var arrEnemies = []
var player = new Player ()


 var playerId ;
 var enemyIntervalId;

 document.addEventListener("keydown", function (event) {
   if (event.key === "d" || event.key === "D") {
     player.rotation(90);
    } else if (event.key === "a" || event.key === "A") {
     player.rotation(-90);
    }
    
   
  });
  

function gameStart() {
  // Llama a createEnemy una vez para comenzar la generación de enemigos.
 // createEnemy();
  // Luego establece un intervalo para generar enemigos adicionales.
  var enemyIntervalId = setInterval(createEnemy, 2000);
}

function createEnemy() {

  // Genera un enemigo en una dirección aleatoria.
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
/*
 function playerMovement() {
  if (player.isDead === true) {

    clearInterval(enemyIntervalId) // Paramos la generación de enemigos
    //enemies.forEach(function(enemy){  // Recorremos el array de enemigos y vamos parando su movimiento uno a uno
    //clearInterval(enemy.enemyIntervalId)
    document.getElementById("gameOver").style.visibility="visible"
    }
    
    // Reseteamos la partida
  } */


/*   this.startMovement = function () {
    // Inicia el movimiento vertical y horizontal simultáneamente.
    setInterval(this.verticalMovement, 350);
    setInterval(this.horizontalMovement, 350);
  };
   */


window.onload = function () {
  gameStart(); 
};


// let lastShotTime = 0; //Flechas

// document.addEventListener("DOMContentLoaded", function() {
//   const player = document.getElementById('player');
//   const arrow = document.getElementById("arrow");
     
  

//   document.addEventListener("keydown", function(event) {
//     if (event.key === " " && canShoot()) {  
//       shootArrow();
//     }
//   });

//   function canShoot() {
//     const currentTime = Date.now();
//     const elapsedTimeSinceLastShot = currentTime - lastShotTime;
//     const timeToWait = 2500;  // Tiempo de espera entre flechas (2 segundos es lo óptimo)

//     if (elapsedTimeSinceLastShot >= timeToWait) {
//       lastShotTime = currentTime;
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function shootArrow() {
//     const arrowTop = 345; 
//     const arrowLeft = 320; 
//     // Posición inicial de la flecha
//     arrow.style.top = `${arrowTop}px`;
//     arrow.style.left = `${arrowLeft}px`; 
//     arrow.style.display = "block";

//     // Calcula la posición final de la flecha en función de la rotación
//     const angleInRadians = rotation * (Math.PI / 180);
//     const deltaX = Math.sin(angleInRadians) * 321;
//     const deltaY = -Math.cos(angleInRadians) * 343;

//     // Animación de la flecha
//     const arrowAnimation = arrow.animate([
//       { top: `${arrowTop}px`, left: `${arrowLeft}px` },
//       { top: `${arrowTop + deltaY}px`, left: `${arrowLeft + deltaX}px` }
//     ], {
//       duration: 2000,
//       easing: "linear",
//       fill: "forwards"  
//     });


//     arrowAnimation.onfinish = function() {
//       arrow.style.display = "none";
//     };
//   }
// });
let refresh = document.getElementById('retry');
refresh.addEventListener('click', _ => {
            location.reload();
})
 