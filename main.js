const hikido = document.querySelector('.hikido');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
// -------------------------------------------------------------
// get x-coordinate
function getClientX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX;
}

// when start dragging
function onDragStart(e) {
  isDragging = true;
  startX = getClientX(e);

  // in mobile, prevent the page scroll
  if (e.cancelable) e.preventDefault();
}

// while dragging
function onDragMove(e) {
  if (!isDragging) return;
  const currentX = getClientX(e);
  const deltaX = currentX - startX;
  let newTranslate = Math.min(0, Math.max(-860, currentTranslate + deltaX));
  hikido.style.transform = `translateX(${newTranslate}px)`;
}

// when drag ends
function onDragEnd(e) {
  if (!isDragging) return;
  isDragging = false;

  // 현재 위치를 기준으로 문 열기/닫기 결정
  const finalX = parseInt(hikido.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
  if (finalX < -800) {
    hikido.style.transform = 'translateX(-860px)'; // 완전히 열기
    currentTranslate = -860;
  }
}

// in both mobile and web, attach an event listener
hikido.addEventListener('mousedown', onDragStart);
hikido.addEventListener('touchstart', onDragStart, { passive: false });

window.addEventListener('mousemove', onDragMove);
window.addEventListener('touchmove', onDragMove, { passive: false });

window.addEventListener('mouseup', onDragEnd);
window.addEventListener('touchend', onDragEnd);

// -------------------------------------------------------------
//
//hikido.addEventListener('mousedown', (e) => {
//  isDragging = true;
//  startX = e.clientX;
//});
//
//window.addEventListener('mousemove', (e) => {
//  if (!isDragging) return;
//  const deltaX = e.clientX - startX;
//  let newTranslate = Math.min(0, Math.max(-860, currentTranslate + deltaX));
//  hikido.style.transform = `translateX(${newTranslate}px)`;
//});
//
//window.addEventListener('mouseup', (e) => {
//  isDragging = false;
//  // 열림/닫힘 판별 로직 (예: 절반 이상 열렸으면 열기)
//  const finalX = parseInt(hikido.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
//  if (finalX < -800) {
//    hikido.style.transform = 'translateX(-860px)'; // 완전히 열림
//    currentTranslate = -860;
//  }
////  else {
////    hikido.style.transform = 'translateX(0px)'; // 다시 닫힘
////    currentTranslate = 0;
////  }
//});
