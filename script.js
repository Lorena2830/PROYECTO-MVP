

let rotation = 0;
let lastShotTime = 0;

document.addEventListener('keydown', function(event) {
  if (event.key === 'd' || event.key === 'D') {
    rotation += 90;
  } else if (event.key === 'a' || event.key === 'A') {
    rotation -= 90;
  }

  player.style.transform = `rotate(${rotation}deg)`;
});

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
