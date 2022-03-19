import { footerInfo } from './footer';
import { content } from './index';

function contactInfo() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-div');
  contactDiv.classList.add('container');

  // Create form
  const formDiv = document.createElement('div');
  formDiv.classList.add('form-div');

  const formTitle = document.createElement('h2');
  formTitle.classList.add('form-title');
  formTitle.innerText = 'Get in touch!';

  const form = document.createElement('form');
  form.classList.add('contact-form');

  const firstName = document.createElement('input');
  firstName.type = 'text';
  firstName.placeholder = 'First Name';
  firstName.required = true;

  const lastName = document.createElement('input');
  lastName.type = 'text';
  lastName.placeholder = 'Last Name';
  lastName.required = true;

  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Email';
  email.required = true;

  const text = document.createElement('textarea');
  text.maxLength = '30';
  text.placeholder = 'Your comments here...';
  text.required = true;

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-btn');
  submitBtn.type = 'submit';
  submitBtn.innerText = 'SUBMIT';

  form.appendChild(firstName);
  form.appendChild(lastName);
  form.appendChild(email);
  form.appendChild(text);
  form.appendChild(submitBtn);
  formDiv.appendChild(formTitle);
  formDiv.appendChild(form);

  // Create divs for Address and Hours
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info-div');

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
  hours.innerHTML =
    'Monday - Thursday : 9am to 9pm <br><br> Friday - Saturday : 9am to 11pm <br><br> Sunday : Closed';
  hoursDiv.appendChild(hours);

  infoDiv.appendChild(addressDiv);
  infoDiv.appendChild(hoursDiv);

  // Success message
  const successDiv = document.createElement('div');
  successDiv.classList.add('success-div');

  const message = document.createElement('p');
  message.classList.add('message');
  message.innerText = 'Thanks! You will hear back from us shortly!';

  successDiv.appendChild(message);
  contactDiv.appendChild(successDiv);
  contactDiv.appendChild(formDiv);
  contactDiv.appendChild(infoDiv);
  content.appendChild(contactDiv);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successDiv.style.display = 'block';
    formDiv.style.display = 'none';
  });
}

export { contactInfo };
