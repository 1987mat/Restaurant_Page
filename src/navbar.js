import { content } from './index';

function renderNav() {
  const navItems = ['Home', 'Menu', 'About'];
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
 
  for(let i = 0; i < navItems.length; i++) {
    let item = navItems[i];
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  }

  nav.appendChild(ul);
  content.appendChild(nav);
}

export{ renderNav };