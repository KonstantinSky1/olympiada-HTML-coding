let arrowNavLinks = document.querySelector('.arrow-nav-links');
let arrowFullInfo = document.querySelector('.arrow-full-info');

let subMenuNavLinks = document.querySelector('.pesonal-account__info-nav-links-list');
let subMenuFullInfo = document.querySelector('.pesonal-account__full-info-content');

arrowNavLinks.addEventListener('click', function() {
  subMenuNavLinks.classList.toggle('subMenu-open');
});

arrowFullInfo.addEventListener('click', function() {
  subMenuFullInfo.classList.toggle('subMenu-open');
});