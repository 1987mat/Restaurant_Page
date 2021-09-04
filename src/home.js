import { content } from './index';

function homePage() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-div');
  const welcomeTitle = document.createElement('h3');
  const subtitle = document.createElement('h5');
  welcomeTitle.innerHTML = 'Welcome to Pizzeria Del Campo!';
  subtitle.innerHTML = 'Artisan Pizza since 1958';
  homeDiv.appendChild(welcomeTitle);
  welcomeTitle.after(subtitle);
  content.appendChild(homeDiv);
}

export { homePage };