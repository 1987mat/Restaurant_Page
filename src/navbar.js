import { content } from './index';

function renderNav() {
  const nav = document.createElement('nav');

  const navDiv = document.createElement('div');
  navDiv.classList.add('nav-div')

  const pageTitle = document.createElement('h1');
  pageTitle.innerHTML = 'Pizzeria Del Campo';
  pageTitle.classList.add('main-title');

  nav.appendChild(pageTitle);
  
  // Create array of nav links
  const navItems = ['Home', 'Menu', 'Contact'];

  for(let i = 0; i < navItems.length; i++) {
    let link = document.createElement('span');
    link.innerText = navItems[i];
    link.classList.add('nav-links')
    navDiv.appendChild(link);
  }
  nav.appendChild(navDiv);
  content.appendChild(nav);
}

export{ renderNav };