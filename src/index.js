import { renderNav } from './navbar';
import { homePage } from './home';
import { renderMenu } from './menu';
import { contactInfo } from './contact';
import { footerInfo } from './footer';

const content = document.getElementById('content');
renderNav();

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

homePage();
footerInfo();

// Event listeners when clicking the nav
document.addEventListener('click', (e) => {
  const target = e.target.innerText;
  
  if(target == 'Home') {
    home();
  }
  if(target == 'Menu') {
    menu();
  }
  if(target == 'Contact') {
    contact();
  }
});

export { content };