const hikido = document.querySelector('.hikido');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;

hikido.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;
  let newTranslate = Math.min(0, Math.max(-860, currentTranslate + deltaX));
  hikido.style.transform = `translateX(${newTranslate}px)`;
});

window.addEventListener('mouseup', (e) => {
  isDragging = false;
  // 열림/닫힘 판별 로직 (예: 절반 이상 열렸으면 열기)
  const finalX = parseInt(hikido.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  if (finalX < -800) {
    hikido.style.transform = 'translateX(-860px)'; // 완전히 열림
    currentTranslate = -860;
  }
//  else {
//    hikido.style.transform = 'translateX(0px)'; // 다시 닫힘
//    currentTranslate = 0;
//  }
});
