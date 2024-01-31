
function Arrow(x, y, direction = 0, arrEnemies, parent){
    var self = this;
    this.x = 316;
    this.y = 339;
    this.direction = direction
    this.width = 20;
    this.height = 20;
    this.sprite = document.createElement('div')
    this.speed = 15;
    this.arrowTimer;
    
    let lastShotTime = 0; 

     Arrow.prototype.canShoot = function() {
       const currentTime = Date.now();
       const elapsedTimeSinceLastShot = currentTime - lastShotTime;
       const timeToWait = 2000; 
       
       if (elapsedTimeSinceLastShot >= timeToWait) {
         lastShotTime = currentTime;
         return true;
        } else {
          return false;
        }
      }
      Arrow.prototype.insertArrow = function(){
        this.sprite.setAttribute("class", "arrow");
        this.sprite.style.left = this.x + "px";
        this.sprite.style.top = this.y + "px";
        parent.appendChild(this.sprite)
        this.shootArrow()
      }

      Arrow.prototype.shootArrow = function() { 
        this.arrowTimer = setInterval(this.move, 100)
      }

          Arrow.prototype.removeArrow = function() {
            parent.removeChild(this.sprite)
            clearInterval(this.arrowTimer)
        }       

        this.move = function () {
          self.checkCollision()
          if(self.direction === 0 || self.direction === 180){
            if(self.direction === 0){
              self.y -= self.speed
            }else{
              self.y += self.speed
            }
            self.sprite.style.top = self.y + 'px'

          }else{
            if(self.direction === 270){
              self.x -= self.speed
            }else{
              self.x += self.speed
            }
            self.sprite.style.left = self.x + 'px'
          } 
          console.log(self.y)
          if(self.y <= 0 || self.y >= 700 || self.x <= 0 || self.x >= 650) {
            self.removeArrow();
          } 
}

      this.checkCollision = function() {
        arrEnemies.forEach(function(enemy, index){
          if ( 
            self.x < enemy.x + enemy.width &&
            self.y < enemy.y + enemy.height &&
            self.x + self.width > enemy.x &&
            self.y+ self.height > enemy.y
            ) {
              console.log(arrEnemies)
              self.removeArrow() 
              enemy.removeEnemy()
              arrEnemies.shift()
            }
            
          })
      }
              
      }
    
        
        export { Arrow }