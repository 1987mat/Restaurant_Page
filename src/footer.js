import { content } from './index';

function footerInfo() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.innerHTML = 'Copyright &copy; 2022. All right reserved.';
  content.appendChild(footer);
}

export { footerInfo };
