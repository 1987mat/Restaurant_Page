import './style.css';
import { renderNav } from './navbar';
import { homePage } from './home';
import { renderMenu } from './menu';
import { contactInfo } from './contact';
import { footerInfo } from './footer';

const content = document.getElementById('content');
renderNav();
homePage();
footerInfo();

function home() {
  content.innerHTML = '';
  renderNav();
  homePage();
  footerInfo();
}

function menu() {
  content.innerHTML = '';
  renderNav();
  renderMenu();
  footerInfo();
}

function contact() {
  content.innerHTML = '';
  renderNav();
  contactInfo();
  footerInfo();
}

// Event listeners when clicking nav links
document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('main-title') ||
    (e.target.classList.contains('nav-item') && e.target.innerText === 'Home')
  ) {
    home();
  }

  if (
    (e.target.classList.contains('nav-item') &&
      e.target.innerText === 'Menu') ||
    e.target.classList.contains('order-now-link')
  ) {
    menu();
  }
  if (
    e.target.classList.contains('nav-item') &&
    e.target.innerText === 'Contact'
  ) {
    contact();
  }
});

export { content };
