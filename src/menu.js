import { content } from './index';

function renderMenu() {
  window.scroll(0, 0);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

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
      description: 'Fresh tomatoes, mozzarella and basil.',
    },
    {
      name: 'Pepperoni',
      description: 'Fresh tomatoes, mozzarella, salami(spicy).',
    },
    {
      name: 'Marinara',
      description: 'Tomato sauce and basil.',
    },
    {
      name: 'Vegeterian',
      description: 'Mushrooms, zucchini, tomatoes, prtichoke, Peppers.',
    },
  ];

  // Loop through items in the array and create the menu
  pizzaMenu.forEach((item) => {
    let name = document.createElement('h4');
    name.classList.add('pizza-name');
    name.innerHTML = item.name;

    let description = document.createElement('p');
    description.classList.add('pizza-description');
    description.innerHTML = item.description;

    menuDiv.appendChild(name);
    name.after(description);
  });

  menuDiv.appendChild(hr);

  const drinkTitle = document.createElement('h3');
  drinkTitle.innerHTML = 'Drinks';
  drinkTitle.classList.add('drink-title');

  const drinks = document.createElement('p');
  drinks.innerHTML =
    'Sparkling Water <br><br> Coca-Cola <br><br> House Wine <br><br> House Beer';

  menuDiv.appendChild(drinkTitle);
  menuDiv.appendChild(drinks);

  menuContainer.appendChild(menuDiv);
  content.appendChild(menuContainer);
}

export { renderMenu };
