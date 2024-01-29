var board = document.querySelector("#board");
var player = document.querySelector("#player");
let rotation = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === "d" || event.key === "D") {
    rotation += 90;
  } else if (event.key === "a" || event.key === "A") {
    rotation -= 90;
  }

  player.style.transform = `rotate(${rotation}deg)`;
});

function gameStart() {
  var enemyId = setInterval(createEnemy, 6000); 
}
function createEnemy () {
  var enemy = new Enemy(300, 650, board);
  enemy.insertEnemy();
  var enemy2 = new Enemy(0, 325, board);
   enemy2.insertEnemy();
  var enemy3 = new Enemy(300, 0, board);
  enemy3.insertEnemy();
  var enemy4= new Enemy(600, 325, board);
  enemy4.insertEnemy();
}

function Enemy(x, y, parent) {
  var self = this;
  this.x = x;
  this.y = y;
  this.sprite = document.createElement("div");
  this.speed = 15;

  this.insertEnemy = function () {
    this.sprite.setAttribute("id", "enemy");
    this.sprite.style.left = this.x + "px";
    this.sprite.style.top = this.y + "px";
    parent.appendChild(this.sprite);
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
  };
  this.horizontalMovement = function () {
    var newX = self.x + self.speed; 
    if (newX >= 0 && newX <= 300) {
      self.x = newX;
      self.sprite.style.left = self.x + "px";
    }
    else {
      newX = self.x + self.speed * -1;
      self.x = newX;
      self.sprite.style.left = self.x + "px";
    }
  }
 this.timerId = setInterval(this.verticalMovement, 350)
 this.timerId = setInterval(this.horizontalMovement, 350)
}

window.onload = function () {
  gameStart();
};
