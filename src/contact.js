import { content } from './index';

function contactInfo() {
  const hoursDiv = document.createElement('div');
  const addressDiv = document.createElement('div');

  const address = [' 2023 Lorem Ipsum Street', '9000, New York, NY'];

  address.forEach((item => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    addressDiv.appendChild(ul);
    content.appendChild(addressDiv);
  }));

  const hoursTitle = document.createElement('h4');
  hoursTitle.innerHTML = 'HOURS';
  content.appendChild(hoursTitle);

  const hours = [
    {
      day: 'Monday - Thursday',
      time: '10am to 9pm'
    },
    {
      day: 'Friday - Saturday',
      time: '10am to 11pm'
    },
    {
      day: 'Sunday',
      time: 'Closed'
    },
  ];

  hours.forEach(item => {
    
    let day = document.createElement('h4');
    day.innerHTML = item.day;
    let time = document.createElement('h5');
    time.innerHTML = item.time;
    hoursDiv.appendChild(day);
    day.after(time);
    content.appendChild(hoursDiv);
  });
}

export { contactInfo };