import { content } from './index';

function footerInfo() {
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer-div')
  const copyright = document.createElement('p');
  copyright.classList.add('copyright');
  copyright.innerHTML = 'Copyright © 2021 Mat';
  footerDiv.appendChild(copyright);
  content.appendChild(footerDiv);

}

export { footerInfo };