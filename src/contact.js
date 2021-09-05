import { content } from './index';

function contactInfo() {
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
  content.appendChild(addressDiv);

  // Hours
  const hoursTitle = document.createElement('h4');
  hoursTitle.innerHTML = 'HOURS';
  hoursDiv.appendChild(hoursTitle);
  const hours = document.createElement('p');
  hours.innerHTML = 'Monday - Thursday : 9am to 9pm <br><br> Friday - Saturday : 9am to 11pm <br><br> Sunday : Closed';
  hoursDiv.appendChild(hours);
  content.appendChild(hoursDiv);

  // SM Icons
  const fbIcon = document.createElement('i');
  fbIcon.classList.add('bi');
  fbIcon.classList.add('bi-facebook');

  const igIcon = document.createElement('i');
  igIcon.classList.add('bi');
  igIcon.classList.add('bi-instagram');

  content.appendChild(fbIcon);
  content.appendChild(igIcon);
}

export { contactInfo };