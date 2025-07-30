const sideNav = document.getElementById("mySidenav");
const menuIcon = document.querySelector(".menu-icon");
const menuIconState = {
  closed: '../images/common/icon_file-folder.png',
  open: '../images/common/icon_file-folder-rotated.png'
};
let isMenuOpen = false;

const table = document.getElementById('table');
const nameContact = document.getElementById('name-contact');
const nameAboutme = document.getElementById('name-aboutme');

const nameDesk = document.getElementById('name-desk');
const nameBookshelves = document.getElementById('name-bookshelves');
const nameWorks = document.getElementById('name-works');

// items with sound
const deskKeyboard = document.getElementById('desk-keyboard');
const deskBook = document.getElementById('desk-book');
const deskNotebook = document.getElementById('desk-notebook');
const deskChair = document.getElementById('desk-chair');

const tableTeaYou = document.getElementById('table-tea-you');
const tableTeaMe = document.getElementById('table-tea-me');
const boardChalk = document.getElementById('board-chalk');
const wallWindow = document.getElementById('wall-window');

const menuTitle = document.querySelectorAll('.menu-title');
const pinIcon = document.getElementById('pin-icon');
let currentHoveredItem = null;

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

// contact:hover
nameContact.addEventListener('mouseenter', function() {
  table.style.backgroundImage = "url('../images/common/menu_contact-or.png')";
});

nameContact.addEventListener('mouseleave', function() {
  table.style.backgroundImage = "url('../images/common/menu_contact-aboutme-bl.png')";
});

// aboutme:hover
nameAboutme.addEventListener('mouseenter', function() {
  table.style.backgroundImage = "url('../images/common/menu_aboutme-or.png')";
});

nameAboutme.addEventListener('mouseleave', function() {
  table.style.backgroundImage = "url('../images/common/menu_contact-aboutme-bl.png')";
});

//menu click event(play an audio file)
deskKeyboard.addEventListener('click', function() {
  let keyboardAudio = new Audio('../sound/keyboard-trimmed.mp3');
  keyboardAudio.play();
});

deskBook.addEventListener('click', function() {
  let pageAudio = new Audio('../sound/pageturn.mp3');
  pageAudio.play();
});

deskNotebook.addEventListener('click', function() {
  let penAudio = new Audio('../sound/writing-trimmed.mp3');
  penAudio.play();
});

deskChair.addEventListener('click', function() {
  let chairAudio = new Audio('../sound/chair-trimmed.mp3');
  chairAudio.play();
});

tableTeaYou.addEventListener('click', function() {
  let teaAudio = new Audio('../sound/tea-trimmed-edited.mp3');
  teaAudio.play();
});

tableTeaMe.addEventListener('click', function() {
  let teaAudio = new Audio('../sound/tea-trimmed-edited.mp3');
  teaAudio.play();
});

boardChalk.addEventListener('click', function() {
  let chalkAudio = new Audio('../sound/board-trimmed.mp3');
  chalkAudio.play();
});

wallWindow.addEventListener('click', function() {
  let curtainAudio = new Audio('../sound/curtain-trimmed.mp3');
  curtainAudio.play();
});

// redirect to works menu
nameWorks.addEventListener('click', function() {
  location.href = "/works/0723.html";
});