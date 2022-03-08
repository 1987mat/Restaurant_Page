import { content } from './index';

function renderNav() {
  const nav = document.createElement('nav');
  const pageTitle = document.createElement('h1');
  pageTitle.innerHTML = 'Pizzeria Del Campo';
  pageTitle.classList.add('main-title');

  const ul = document.createElement('ul');
  ul.classList.add('nav-menu');

  // Create array of nav links
  const navItems = ['Home', 'Menu', 'Contact'];

  for (let i = 0; i < navItems.length; i++) {
    let link = document.createElement('li');
    link.innerText = navItems[i];
    link.classList.add('nav-item');
    ul.appendChild(link);
  }

  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');

  for (let j = 0; j < navItems.length; j++) {
    let bar = document.createElement('span');
    bar.classList.add('bar');
    hamburger.appendChild(bar);
  }

  nav.appendChild(pageTitle);
  nav.appendChild(ul);
  nav.appendChild(hamburger);
  content.appendChild(nav);

  // Event listener when clicking hamburger menu on tablet/mobile screen
  hamburger.addEventListener('click', mobileMenu);

  function mobileMenu() {
    // Transform hamburger icon into 'X' icon
    hamburger.classList.toggle('active');
    // Show menu links
    ul.classList.toggle('active');
  }
}

export { renderNav };
