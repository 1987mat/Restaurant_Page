import { content } from './index';

function renderMenu() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');
  const hr = document.createElement('hr');
  const title = document.createElement('h2');
  title.innerHTML = 'MENU';


  const pizzaTitle = document.createElement('h3');
  pizzaTitle.innerHTML = 'Pizzas';
  menuDiv.appendChild(title);
  menuDiv.appendChild(pizzaTitle);

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

  pizzaMenu.forEach((item) => {

    let name = document.createElement('h4');
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
  const drinks = document.createElement('p');
  drinks.innerHTML = 'Sparkling Water <br><br> Coca-Cola <br><br> House Wine <br><br> House Beer';

  menuDiv.appendChild(drinkTitle);
  menuDiv.appendChild(drinks);

}

export { renderMenu };