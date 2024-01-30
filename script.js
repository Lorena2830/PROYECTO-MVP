var board = document.querySelector("#board");
let rotation = 0;

function Player(x, y){
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.isDead = false
  this.sprite = document.querySelector('#player')
}
 var player = new Player (325, 300, board)
 var playerId ;
 var enemyIntervalId;

document.addEventListener("keydown", function (event) {
  if (event.key === "d" || event.key === "D") {
    rotation += 90;
  } else if (event.key === "a" || event.key === "A") {
    rotation -= 90;
  }

  player.sprite.style.transform = `rotate(${rotation}deg)`;
});

function gameStart() {
  // Llama a createEnemy una vez para comenzar la generación de enemigos.
  createEnemy();
  // Luego establece un intervalo para generar enemigos adicionales.
  var enemyIntervalId = setInterval(createEnemy, 6000);
}

function createEnemy() {
  // Genera un enemigo en una dirección aleatoria.
  var randomDirection = Math.floor(Math.random() * 4) + 1;

  switch (randomDirection) {
    case 1:
      new Enemy(300, 650, board, 0).insertEnemy();
      break;
    case 2:
      new Enemy(0, 325, board, 90).insertEnemy();
      break;
    case 3:
      new Enemy(300, 0, board, 180).insertEnemy();
      break;
    case 4:
      new Enemy(600, 325, board, 270).insertEnemy();
      break;
  }
}
function playerMovement() {
  if (player.isDead === true) {

    clearInterval(enemyIntervalId) // Paramos la generación de enemigos
    //enemies.forEach(function(enemy){  // Recorremos el array de enemigos y vamos parando su movimiento uno a uno
    //clearInterval(enemy.enemyIntervalId)
    document.getElementById("gameOver").style.visibility="visible"
    }
    
    // Reseteamos la partida
  }


function Enemy(x, y, parent, rotation) {
  var self = this;
  this.x = x;
  this.y = y;
  this,width = 50
  this.height = 50
  this.rotation = rotation;
  this.sprite = document.createElement("div");
  this.speed = 15;

  this.insertEnemy = function () {
    this.sprite.setAttribute("class", "enemy");
    this.sprite.style.left = this.x + "px";
    this.sprite.style.top = this.y + "px";
    this.sprite.style.transform = `rotate(${this.rotation}deg)`;
    parent.appendChild(this.sprite);
    
    // Inicia el movimiento del enemigo después de insertarlo.
    this.startMovement();
  };

  this.verticalMovement = function () {
    var newY = self.y + self.speed;
    if (newY >= 0 && newY <= 325) {
      self.y = newY;
      self.sprite.style.top = self.y + "px";
    }
    if (self.y >= 325 && self.y <= 650) {
      newY = self.y + self.speed * -1;
      self.y = newY;
      self.sprite.style.top = self.y + "px";
    }
    this.checkCollision()
  }

 

  this.horizontalMovement = function () {
    var newX = self.x + self.speed;
    if (newX >= 0 && newX <= 300) {
      self.x = newX;
      self.sprite.style.left = self.x + "px";
    } else {
      newX = self.x + self.speed * -1;
      self.x = newX;
      self.sprite.style.left = self.x + "px";
    }
  };
  this.checkCollision = function() {
    if ( 
      this.x < player.x + player.width &&
      this.y < player.y + player.height &&
      this.x + 50 > player.x &&
      this.y + 50 > player.y
      ) {
          player.isDead = true // Matamos al jugador en caso de haber colisionado con él
        }
  }

  this.startMovement = function () {
    // Inicia el movimiento vertical y horizontal simultáneamente.
    setInterval(this.verticalMovement, 350);
    setInterval(this.horizontalMovement, 350);
    playerMovement()
  }
}
  this.startMovement = function () {
    // Inicia el movimiento vertical y horizontal simultáneamente.
    setInterval(this.verticalMovement, 350);
    setInterval(this.horizontalMovement, 350);
  };


window.onload = function () {
  gameStart();
};


let lastShotTime = 0; //Flechas

document.addEventListener("DOMContentLoaded", function() {
  const player = document.getElementById('player');
  const arrow = document.getElementById("arrow");
     
  

  document.addEventListener("keydown", function(event) {
    if (event.key === " " && canShoot()) {  
      shootArrow();
    }
  });

  function canShoot() {
    const currentTime = Date.now();
    const elapsedTimeSinceLastShot = currentTime - lastShotTime;
    const timeToWait = 2000;  // Tiempo de espera entre flechas (2 segundos es lo óptimo)

    if (elapsedTimeSinceLastShot >= timeToWait) {
      lastShotTime = currentTime;
      return true;
    } else {
      return false;
    }
  }

  function shootArrow() {
    const arrowTop = 345; 
    const arrowLeft = 320; 
    // Posición inicial de la flecha
    arrow.style.top = `${arrowTop}px`;
    arrow.style.left = `${arrowLeft}px`; 
    arrow.style.display = "block";

    // Calcula la posición final de la flecha en función de la rotación
    const angleInRadians = rotation * (Math.PI / 180);
    const deltaX = Math.sin(angleInRadians) * 321;
    const deltaY = -Math.cos(angleInRadians) * 343;

    // Animación de la flecha
    const arrowAnimation = arrow.animate([
      { top: `${arrowTop}px`, left: `${arrowLeft}px` },
      { top: `${arrowTop + deltaY}px`, left: `${arrowLeft + deltaX}px` }
    ], {
      duration: 2000,
      easing: "linear",
      fill: "forwards"  
    });


    arrowAnimation.onfinish = function() {
      arrow.style.display = "none";
    };
  }
});

