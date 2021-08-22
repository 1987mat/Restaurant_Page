import { content } from './index';

function renderMenu() {
  const menuDiv = document.createElement('div');

  const pizzaTitle = document.createElement('h3');
  pizzaTitle.innerHTML = 'Pizzas';
  menuDiv.appendChild(pizzaTitle)

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

  const drinkMenu = ['Sparkling Water', 'Coca-Cola', 'House Wine', 'Guinness Beer'];


  pizzaMenu.forEach((item) => {

    let name = document.createElement('h5');
    let description = document.createElement('p');
    name.innerHTML = item.name;
    description.innerHTML = item.description;
  
    menuDiv.appendChild(name);
    name.after(description);
    content.appendChild(menuDiv);

  });

  const drinkTitle = document.createElement('h3');
  drinkTitle.innerHTML ='Drinks';
  menuDiv.appendChild(drinkTitle);

  drinkMenu.forEach((item) => {
    let name = document.createElement('h5');
    name.innerHTML = item;
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.appendChild(name);
    ul.appendChild(li);
    menuDiv.appendChild(ul); 
 });
}

export { renderMenu };