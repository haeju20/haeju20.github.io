const hikido = document.querySelector('.hikido');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;

function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// get x position from mouse or touch event
function getClientX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX;
}

// start dragging
function onDragStart(e) {
  isDragging = true;
  startX = getClientX(e);

  // prevent scrolling on mobile
  if (e.cancelable) e.preventDefault();
}

// handle dragging movement
function onDragMove(e) {
  if (!isDragging) return;
  const currentX = getClientX(e);
  const deltaX = currentX - startX;
  let newTranslate = Math.min(0, Math.max(-860, currentTranslate + deltaX));
  hikido.style.transform = `translateX(${newTranslate}px)`;
}

// end dragging and decide final state
function onDragEnd(e) {
  if (!isDragging) return;
  isDragging = false;

  const finalX = parseInt(hikido.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  if (finalX < -800) {
    hikido.style.transform = 'translateX(-860px)'; // fully open
    currentTranslate = -860;
  }
}

// attach both mouse and touch event
hikido.addEventListener('mousedown', onDragStart);
hikido.addEventListener('touchstart', onDragStart, { passive: false });

window.addEventListener('mousemove', onDragMove);
window.addEventListener('touchmove', onDragMove, { passive: false });

window.addEventListener('mouseup', onDragEnd);
window.addEventListener('touchend', onDragEnd);

// Delay setting until DOM is fully ready
window.addEventListener('load', setVh);
window.addEventListener('resize', setVh);