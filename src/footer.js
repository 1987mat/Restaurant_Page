import { content } from './index';

function footerInfo() {
  const footerDiv = document.createElement('div');
  const copyright = document.createElement('p');
  copyright.innerHTML = 'Copyright © 2021 Mat';
  footerDiv.appendChild(copyright);
  content.appendChild(footerDiv);

}

export { footerInfo };