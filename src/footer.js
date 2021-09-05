import { content } from './index';

function footerInfo() {
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer-div')

  const copyright = document.createElement('p');
  copyright.classList.add('copyright');
  copyright.innerHTML = 'Copyright © 2021 Mat';

  const githubLink = document.createElement('a');
  githubLink.href = "https://github.com/1987mat";
  githubLink.classList.add('github-link');

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('bi-github');

  githubLink.appendChild(githubIcon);
  footerDiv.appendChild(copyright);
  footerDiv.appendChild(githubLink);

  content.appendChild(footerDiv);

}

export { footerInfo };