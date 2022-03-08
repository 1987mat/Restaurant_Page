import { content } from './index';

function homePage() {
  window.scroll(0, 0);

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-div');

  const welcomeTitle = document.createElement('h3');
  welcomeTitle.innerHTML = 'Welcome to Pizzeria Del Campo';
  welcomeTitle.classList.add('welcome-title');

  const subtitle = document.createElement('h5');
  subtitle.innerHTML = 'Artisan Pizza since 1958';
  subtitle.classList.add('subtitle');

  const orderNowBtn = document.createElement('button');
  orderNowBtn.innerHTML = 'ORDER NOW';
  orderNowBtn.classList.add('order-now-link');

  homeDiv.appendChild(welcomeTitle);
  subtitle.appendChild(orderNowBtn);
  welcomeTitle.after(subtitle);
  content.appendChild(homeDiv);
}

export { homePage };
