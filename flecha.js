function Arrow(x, y, parent, array ,player){
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.sprite = document.createElement('div');
    this.speed = 10;
  
   Arrow.prototype.insertArrow = function () {
      this.sprite.setAttribute('class', 'arrow');
      this.sprite.style.left = this.x + 'px';
      this.sprite.style.top = this.y + 'px';
      this.sprite.style.transform = `rotate(${this.direction}deg)`;
      parent.appendChild(this.sprite);
      
      //Intento de iniciar el movimiento de flecha
      this.startMovement(); 
    };
  
    this.removeArrow = function() {
      parent.removeChild(this.sprite)
      clearInterval(this.timerId)
    }
  
    this.move = function () {
      self.checkCollision()
      var newY = self.y + self.speed * self.direction 
      if (newY >= 0 && newY <= 750) {
        self.y = newY
        self.sprite.style.top = self.y + 'px'
      }
  
      if (self.y <= 0) {
        self.removeArrow() // Quitamos la flecha de la pantalla si ha llegado al borde superior del escenario
      }
    }
  
    this.checkCollision = function() {
      array.forEach(function(enemy, index){
        if ( 
              self.x < enemy.x + enemy.width &&
              self.y < enemy.y + enemy.height &&
              self.x + self.width > enemy.x &&
              self.y+ self.height > enemy.y
            ) {
              self.removeArrow() // En caso de colisionar con un enemigo, quitamos tanto la flecha como el enemigo de la pantalla
              enemy.removeEnemy(index)
            }
      })
    }
  
    this.timerId = setInterval(this.move, 50)
  }
  
 export { Arrow }