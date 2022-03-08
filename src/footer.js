import { content } from './index';

function footerInfo() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  // SM Icons
  const iconDiv = document.createElement('div');
  iconDiv.classList.add('icon-div');

  const fbIcon = document.createElement('i');
  fbIcon.classList.add('bi');
  fbIcon.classList.add('bi-facebook');

  const igIcon = document.createElement('i');
  igIcon.classList.add('bi');
  igIcon.classList.add('bi-instagram');

  const twitterIcon = document.createElement('i');
  twitterIcon.classList.add('bi');
  twitterIcon.classList.add('bi-twitter');

  iconDiv.appendChild(fbIcon);
  iconDiv.appendChild(igIcon);
  iconDiv.appendChild(twitterIcon);
  footer.appendChild(iconDiv);
  content.appendChild(footer);
}

export { footerInfo };
