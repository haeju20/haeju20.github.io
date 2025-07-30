const menuIcon = document.querySelector(".menu-icon");
const roomIcon = document.querySelector(".room-icon");
const pinIcon = document.querySelector(".pin-icon");

const titleAboutme = document.getElementById('title-aboutme');
const titleBookshelves = document.getElementById('title-bookshelves');
const titleContact = document.getElementById('title-contact');
const titleDesk = document.getElementById('title-desk');
const titleWorks = document.getElementById('title-works');

//menuIcon.addEventListener('click', function() {
//  location.href = "/2025-1di/menu.html";
//});

roomIcon.addEventListener('click', function() {
  location.href = "index.html";
});


document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu-title');
  const firstColumn = document.querySelector('.icon-container');

  menuItems.forEach((menu, index) => {
    menu.addEventListener('mouseenter', function() {
      // 메뉴의 위치 계산
      const menuRect = menu.getBoundingClientRect();
      const firstColumnRect = firstColumn.getBoundingClientRect();

      // 메뉴의 중앙 위치에서 첫 번째 열의 상단 패딩을 고려한 오프셋 계산
      const menuCenterY = menuRect.top + menuRect.height / 2;
      const firstColumnTop = firstColumnRect.top + 60; // 첫 번째 열의 패딩 60px
      const iconsCenterY = firstColumnTop + 6; // 아이콘들의 기본 중앙 위치

      const translateY = menuCenterY - iconsCenterY;

      pinIcon.style.transform = `translateY(${translateY}px)`;
    });

    menu.addEventListener('mouseleave', function() {
      pinIcon.style.transform = 'translateY(0)';
    });
  });
});

titleAboutme.addEventListener('click', function() {
  location.href = "aboutme.html";
});

titleBookshelves.addEventListener('click', function() {
  location.href = "bookshelves.html";
});
