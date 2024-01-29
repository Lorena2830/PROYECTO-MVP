
const player = document.getElementById('player');
let rotation = 0;

document.addEventListener('keydown', function(event) {
  if (event.key === 'd' || event.key === 'D') {
    rotation += 90;
  } else if (event.key === 'a' || event.key === 'A') {
    rotation -= 90;
  }

  player.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
});