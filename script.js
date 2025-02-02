const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navlist'); // Fixed the class name

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active'); // Adds/removes the 'active' class instead of modifying inline styles
});
;
