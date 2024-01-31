// import { Arrow } from "./flecha"

function Player(axisX = 325, axisY = 300, width = 50, height = 50, isDead = false, direction = 0) {
    this.axisX = axisX
    this.axisY = axisY
    this.width = width
    this.height = height
    this.isDead = isDead
    this.direction = direction
    this.sprite = document.querySelector('#player')

    Player.prototype.rotation = function (grades){

        //Guardo la Dirección Actual
        let newDirection = this.direction
        //Si le restamos 90 Grados a 0 -> Pasará a ser 270 grados.
        if(this.direction == 0 && grades < 0){
            newDirection = 270
        
        //Si le sumamos 90 Grados a 270 -> Pasará a ser 0 grados.
        } else if (this.direction == 270 && grades > 0){
            newDirection = 0
        } else {
            newDirection += grades
        }
        
        this.direction = newDirection
        this.sprite.style.transform = `rotate(${this.direction}deg)`;
    } 
}
export { Player }
