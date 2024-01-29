var board = document.querySelector('#board')

function Player (x, y) {
    this.x = x
    this.y = y
    this.sprite = document.querySelector('#player')
    this.girarElemento(); {
        var grados = 0;
        var intervalo = setInterval(function (){
            grados += 90;
            this.style.transform = ('rotate' + grados + 'deg');
        }, 10);
    }
}
var player = new Player(300, 325)

setTimeout(function() {
    clearInterval(intervalo);
    elemento.style.transform = 'rotate(0deg)';
  }, 500);

window.addEventListener('keydown', function(e){
 switch(e.key) {
    case 'a':
    case 'd':
    case 'w':
    case 's':
      girarElemento()
      break
 }
})