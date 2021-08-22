import { renderNav } from './navbar';
import { homePage } from './home';
import { renderMenu } from './menu';

const content = document.getElementById('content');
renderNav();

function home() {
  content.innerHTML = '';
  renderNav();
  homePage();
}

function menu() {
  content.innerHTML = '';
  renderNav();
  renderMenu();
}

homePage();

document.addEventListener('click', (e) => {
  const target = e.target.innerText;

  if(target == 'Home') {
    home();
  }
  if(target == 'Menu') {
    menu();
  }
});

export { content };