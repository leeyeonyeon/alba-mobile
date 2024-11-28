$(document).ready(function() {
  const menuButton = $('#menu'); // 메뉴 열기 버튼
  const mobileMenu = $('#mobileMenu'); // 모바일 메뉴
  const closeMobileMenu = $('#closeMobileMenu'); // 메뉴 닫기 버튼
  
  // 메뉴 열기
  menuButton.on('click', function() {
    mobileMenu.css('display', 'block'); // 메뉴를 보이게 함
  });
  
  // 메뉴 닫기
  closeMobileMenu.on('click', function() {
    mobileMenu.css('display', 'none'); // 메뉴를 숨김
  });
});