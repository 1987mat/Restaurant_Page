import { content } from './index';

function renderMenu() {
  window.scroll(0, 0);

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  const hr = document.createElement('hr');
  const title = document.createElement('h2');
  title.innerHTML = 'MENU';
  title.classList.add('menu-title');

  menuDiv.appendChild(title);

  // Create array of pizza items
  const pizzaMenu = [
    {
      name: 'Margherita',
      description: 'Fresh tomatoes, mozzarella and basil.'
    },
    {
      name: 'Pepperoni',
      description: 'Fresh tomatoes, mozzarella, salami(spicy).'
    },
    {
      name: 'Marinara',
      description: 'Tomato sauce and basil.'
    },
    {
      name: 'Vegeterian',
      description: 'Mushrooms, Zucchini, Tomatoes, Artichoke, cheese and belt peppers.'
    },
  ];

  // Loop through items in the array and create the menu
  pizzaMenu.forEach((item) => {

    let name = document.createElement('h4');
    name.classList.add('pizza-name');
    let description = document.createElement('p');
    name.innerHTML = item.name;
    description.innerHTML = item.description;
  
    menuDiv.appendChild(name);
    name.after(description);
    content.appendChild(menuDiv);
  });

  menuDiv.appendChild(hr);

  const drinkTitle = document.createElement('h3');
  drinkTitle.innerHTML ='Drinks';
  drinkTitle.classList.add('drink-name');

  const drinks = document.createElement('p');
  drinks.innerHTML = 'Sparkling Water <br><br> Coca-Cola <br><br> House Wine <br><br> House Beer';

  menuDiv.appendChild(drinkTitle);
  menuDiv.appendChild(drinks);
}

export { renderMenu };