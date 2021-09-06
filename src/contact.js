import { content } from './index';

function contactInfo() {

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-div');

  // Create divs for Address and Hours
  const addressDiv = document.createElement('div');
  addressDiv.classList.add('address-div');

  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('hours-div');

  // Address
  const addressTitle = document.createElement('h4');
  addressTitle.innerHTML = 'ADDRESS';
  addressDiv.appendChild(addressTitle);
  const address = document.createElement('p');
  address.innerHTML = '2023 Lorem Ipsum Street, 9000 <br><br> New York, NY';
  addressDiv.appendChild(address);
  
  // Hours
  const hoursTitle = document.createElement('h4');
  hoursTitle.innerHTML = 'HOURS';
  hoursDiv.appendChild(hoursTitle);
  const hours = document.createElement('p');
  hours.innerHTML = 'Monday - Thursday : 9am to 9pm <br><br> Friday - Saturday : 9am to 11pm <br><br> Sunday : Closed';
  hoursDiv.appendChild(hours);

  // SM Icons
  const iconDiv = document.createElement('div');
  iconDiv.classList.add('icon-div');

  const fbIcon = document.createElement('i');
  fbIcon.classList.add('bi');
  fbIcon.classList.add('bi-facebook');

  const igIcon = document.createElement('i');
  igIcon.classList.add('bi');
  igIcon.classList.add('bi-instagram');

  iconDiv.appendChild(fbIcon);
  iconDiv.appendChild(igIcon);

  contactDiv.appendChild(addressDiv);
  contactDiv.appendChild(hoursDiv);
  contactDiv.appendChild(iconDiv);
  content.appendChild(contactDiv);
}

export { contactInfo };