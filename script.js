
const player = document.getElementById('player');
let rotation = 0;

document.addEventListener('keydown', function(event) {
  if (event.key === 'd' || event.key === 'D') {
    rotation += 90;
  } else if (event.key === 'a' || event.key === 'A') {
    rotation -= 90;
  }

  player.style.transform = `rotate(${rotation}deg)`;

});

//El punto x=0 e y = 0 es la esquina superior izquierda(si no se genera bien revisar esta declaración)
function generate() {
  //Array que contiene las posiciones, al añadir más posiciones simplemente insertarlas debajo
let arrayPosition = [
    { x: 50, y: 0 },
    { x: 50, y: -100 },
    { x: 0, y: -50 },
    { x: 100, y: -50 }
];

setInterval(() => {
  let gen = Math.floor(Math.random()*arrayPosition.length);
  // console.log("Posición actual:", arrayPosition[gen]);
}, 1000);
}

generate();
