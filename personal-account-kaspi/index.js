let arrowNavLinks = document.querySelector('.arrow-nav-links');

let subMenuNavLinks = document.querySelector('.pesonal-account__info-nav-links-list');

arrowNavLinks.addEventListener('click', function() {
  subMenuNavLinks.classList.toggle('subMenu-open');
});