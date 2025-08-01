const sideNav = document.getElementById("mySidenav");
const menuIcon = document.querySelector(".menu-icon");
const menuIconState = {
  closed: '../2025-1di/images/common/icon_file-folder.png',
  open: '../2025-1di/images/common/icon_file-folder-rotated.png'
};
let isMenuOpen = false;

const menuTitle = document.querySelectorAll('.menu-title');
const pinIcon = document.getElementById('pin-icon');
let currentHoveredItem = null;

const titleAboutme = document.getElementById('title-aboutme');
const titleBookshelves = document.getElementById('title-bookshelves');
const titleContact = document.getElementById('title-contact');
const titleDesk = document.getElementById('title-desk');
const titleWorks = document.getElementById('title-works');

const roomIcon = document.querySelector(".room-icon");

const flipMsg = document.getElementById('card-message');

function toggleMenuIcon() {
  isMenuOpen = !isMenuOpen;
  menuIcon.src = isMenuOpen ? menuIconState.open : menuIconState.closed;
  menuIcon.classList.toggle('rotated', isMenuOpen);

  if (isMenuOpen) {
    sideNav.style.width = "25%";
    document.getElementById("test-bg-wrapper").style.marginLeft = "25%";
  } else {
    sideNav.style.width = "0";
    document.getElementById("test-bg-wrapper").style.marginLeft = "0";
  }
}

menuIcon.addEventListener('click', function() {
  toggleMenuIcon();
});

// 각 메뉴 아이템에 이벤트 리스너 추가
menuTitle.forEach((mt, index) => {
  // 마우스 호버 시
  mt.addEventListener('mouseenter', function() {
    showPinAtMenu(mt, index);
  });
});

// 메뉴 컨테이너에서 마우스가 완전히 벗어났을 때만 아이콘 숨기기
document.querySelector('.title-container').addEventListener('mouseleave', function() {
  hidePin();
});

function showPinAtMenu(menuTitle, index) {
  // 이전에 호버된 메뉴가 있다면 원래 위치로
  if (currentHoveredItem && currentHoveredItem !== menuTitle) {
      currentHoveredItem.classList.remove('moved');
  }

  // 새로운 메뉴 설정
  currentHoveredItem = menuTitle;

  // 아이콘을 해당 메뉴 높이에 맞춰 위치시키기
  positionPinAtMenu(menuTitle);

  // 메뉴를 오른쪽으로 이동
  menuTitle.classList.add('moved');

  // 아이콘 보이기
  pinIcon.classList.add('visible');
}

function positionPinAtMenu(menuTitle) {
    // 메뉴 아이템의 위치와 크기 계산
    const menuRect = menuTitle.getBoundingClientRect();
    const containerRect = menuTitle.parentElement.getBoundingClientRect();

    // 메뉴 아이템의 중앙에 아이콘 위치시키기
    const relativeTop = menuRect.top - containerRect.top + (menuRect.height / 2) - 10 - 10; // - 핀 이미지 높이 1/2 - 타이틀 아래 패딩 10픽셀

    pinIcon.style.top = relativeTop + 'px';
}

function hidePin() {
    // 아이콘 숨기기
    pinIcon.classList.remove('visible');

    // 모든 메뉴를 원래 위치로
    if (currentHoveredItem) {
        currentHoveredItem.classList.remove('moved');
        currentHoveredItem = null;
    }
}

// redirect to contact menu
flipMsg.addEventListener('click', function() {
  location.href = "../2025-1di/contact.html";
});

// redirect to main page
roomIcon.addEventListener('click', function() {
  location.href = "../2025-1di/index.html";
});

// redirect to desk menu
titleDesk.addEventListener('click', function() {
  location.href = "../2025-1di/desk/desk.html";
});

// redirect to bookshelves menu
titleBookshelves.addEventListener('click', function() {
  location.href = "../2025-1di/bookshelves.html";
});

// redirect to contact menu
titleContact.addEventListener('click', function() {
  location.href = "../2025-1di/contact.html";
});

// redirect to aboutme menu
titleAboutme.addEventListener('click', function() {
  location.href = "../2025-1di/aboutme.html";
});

// redirect to works menu
titleWorks.addEventListener('click', function() {
  location.href = "../2025-1di/works.html";
});