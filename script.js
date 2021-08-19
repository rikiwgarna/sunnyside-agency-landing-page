const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileNavigation = document.querySelector('.mobile-navigation');

hamburgerIcon.addEventListener('click', () => {
  mobileNavigation.classList.toggle('active');
});
