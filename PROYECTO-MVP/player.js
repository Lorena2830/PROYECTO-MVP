
function Player(axisX = 325, axisY = 300, width = 50, height = 50, isDead = false, direction = 0) {
    this.axisX = axisX
    this.axisY = axisY
    this.width = width
    this.height = height
    this.isDead = isDead
    this.direction = direction
    this.sprite = document.querySelector('#player')

    Player.prototype.rotation = function (grades){

        let newDirection = this.direction

        if(this.direction == 0 && grades < 0){
            newDirection = 270

        } else if (this.direction == 270 && grades > 0){
            newDirection = 0
        } else {
            newDirection += grades
        }
        
        this.direction = newDirection
        this.sprite.style.transform = `rotate(${this.direction}deg)`;
        return this.direction
    } 
}
export { Player }
