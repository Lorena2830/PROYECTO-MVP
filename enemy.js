
function Enemy(x, y, parent, direction, player) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 50
    this.height = 50
    this.direction = direction;
    this.sprite = document.createElement("div");
    this.speed = 40;
    this.timerId;

    Enemy.prototype.insertEnemy = function () {
        this.sprite.setAttribute("class", "enemy");
        this.sprite.style.left = this.x + "px";
        this.sprite.style.top = this.y + "px";
        console.log(this.direction)
        this.sprite.style.transform = `rotate(${this.direction}deg)`;
        parent.appendChild(this.sprite);

        // Inicia el movimiento del enemigo después de insertarlo.
        this.startMovement();

        
    };

/*     this.move = function () {
        let newY;
        console.log(this.direction)
        switch(this.direction){
            case 0:
                console.log(this.y +" " + this.speed)
            newY = this.y - this.speed;
            console.log(newY)
            this.y = newY;
            self.sprite.style.top = this.y + "px";
          

        }
    } */



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
        self.checkPlayerCollision()
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
        self.checkPlayerCollision()
    };

    Enemy.prototype.checkPlayerCollision = function () {
        if (
            this.x < player.axisX + player.width &&
            this.y < player.axisY + player.height &&
            this.x + 50 > player.axisX &&
            this.y + 50 > player.axisY
        ) {
            player.isDead = true // Matamos al jugador en caso de haber colisionado con él
           // player.sprite.remove()
            clearInterval(this.timerId)
           document.getElementById("gameOver").style.visibility = "visible"

        }
    }

    Enemy.prototype.startMovement = function () {
        if(this.direction == 0 || this.direction == 180){
            this.timerId = setInterval(self.verticalMovement, 350);
        }else if (this.direction == 90 || this.direction == 270) {
            this.timerId = setInterval(self.horizontalMovement, 350);
        }
        // Inicia el movimiento vertical y horizontal simultáneamente.
        //setInterval(this.horizontalMovement, 350);
       // playerMovement()
    }

    Enemy.prototype.removeEnemy = function () {
        this.sprite.remove()
    }
}

export { Enemy }