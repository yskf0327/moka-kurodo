const navButton = document.getElementById('js-nav-button');
const bodyElm = document.querySelector('body');
const mainElm = document.querySelector('main');
const navLinks = document.querySelectorAll('nav>ul>li>a');

navButton.addEventListener('click', () => {
  bodyElm.classList.toggle('open');
  if (bodyElm.classList.contains('open')) {
    mainElm.inert = true;
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        bodyElm.classList.remove('open');
      });
    });
  } else {
    mainElm.inert = false;
  }
});
