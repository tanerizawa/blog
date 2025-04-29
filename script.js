// Tunggu sampai DOM siap
document.addEventListener('DOMContentLoaded', function() {

  /* === Scroll to Top Button === */
  const toTopButton = document.createElement('button');
  toTopButton.id = 'toTop';
  toTopButton.textContent = '↑';
  document.body.appendChild(toTopButton);

  toTopButton.style.display = 'none';
  toTopButton.style.position = 'fixed';
  toTopButton.style.bottom = '30px';
  toTopButton.style.right = '30px';
  toTopButton.style.padding = '10px 15px';
  toTopButton.style.backgroundColor = '#52796F';
  toTopButton.style.color = '#fff';
  toTopButton.style.border = 'none';
  toTopButton.style.borderRadius = '50%';
  toTopButton.style.cursor = 'pointer';
  toTopButton.style.zIndex = '9999';

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
      toTopButton.style.display = 'block';
    } else {
      toTopButton.style.display = 'none';
    }
  });

  toTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  /* === Smooth Scroll for Anchor Links === */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* === Dark Mode Toggle === */
  const darkModeToggle = document.createElement('button');
  darkModeToggle.id = 'darkModeToggle';
  darkModeToggle.textContent = '🌙';
  document.body.appendChild(darkModeToggle);

  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.bottom = '30px';
  darkModeToggle.style.left = '30px';
  darkModeToggle.style.padding = '10px 15px';
  darkModeToggle.style.backgroundColor = '#52796F';
  darkModeToggle.style.color = '#fff';
  darkModeToggle.style.border = 'none';
  darkModeToggle.style.borderRadius = '50%';
  darkModeToggle.style.cursor = 'pointer';
  darkModeToggle.style.zIndex = '9999';

  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });

  /* === Lazy Load Gambar === */
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  /* === Hamburger Menu for Mobile === */
  const menu = document.getElementById('navigation');
  const hamburger = document.createElement('button');
  hamburger.id = 'hamburgerMenu';
  hamburger.textContent = '☰';
  hamburger.style.display = 'none';
  hamburger.style.position = 'absolute';
  hamburger.style.top = '10px';
  hamburger.style.right = '20px';
  hamburger.style.background = 'none';
  hamburger.style.border = 'none';
  hamburger.style.fontSize = '28px';
  hamburger.style.cursor = 'pointer';

  document.querySelector('header .container').appendChild(hamburger);

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('show-menu');
  });

  // Responsive check
  function checkWindowSize() {
    if (window.innerWidth < 768) {
      hamburger.style.display = 'block';
      menu.style.display = 'none';
    } else {
      hamburger.style.display = 'none';
      menu.style.display = 'flex';
    }
  }

  window.addEventListener('resize', checkWindowSize);
  window.addEventListener('load', checkWindowSize);

});
