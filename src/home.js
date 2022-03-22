import { content } from './index';

function homePage() {
  window.scroll(0, 0);

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-div');
  homeDiv.classList.add('container');

  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero-div');

  const welcomeTitle = document.createElement('h3');
  welcomeTitle.innerHTML = 'Welcome to Pizzeria Del Campo';
  welcomeTitle.classList.add('welcome-title');

  const subtitle = document.createElement('h5');
  subtitle.innerHTML = 'Artisan Pizza since 1958';
  subtitle.classList.add('subtitle');

  const orderNowBtn = document.createElement('button');
  orderNowBtn.innerHTML = 'Order Online';
  orderNowBtn.classList.add('order-now-link');

  const articleSection = document.createElement('div');
  articleSection.classList.add('article-section');

  const ovenImage = document.createElement('img');
  ovenImage.src = 'images/oven.jpg';
  ovenImage.classList.add('article-home-image');

  const feedDiv = document.createElement('div');
  feedDiv.classList.add('feed-div');

  const followText = document.createElement('h3');
  followText.classList.add('follow-text');
  followText.innerText = 'FOLLOW US!';

  const feed1 = document.createElement('img');
  feed1.src = 'images/pizza-feed.jpg';
  feed1.classList.add('feed');

  const feed2 = document.createElement('img');
  feed2.src = 'images/pizza-feed2.jpg';
  feed2.classList.add('feed');

  const feed3 = document.createElement('img');
  feed3.src = 'images/pizza-feed3.jpg';
  feed3.classList.add('feed');

  feedDiv.append(feed1, feed2, feed3);

  const textDiv = document.createElement('div');
  textDiv.classList.add('text-div');

  const text = document.createElement('p');
  text.classList.add('homepage-text');
  text.innerText =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

  textDiv.appendChild(text);
  articleSection.append(ovenImage, textDiv, followText, feedDiv);

  heroDiv.appendChild(welcomeTitle);
  welcomeTitle.after(subtitle);
  heroDiv.appendChild(orderNowBtn);

  homeDiv.appendChild(heroDiv);
  homeDiv.appendChild(articleSection);
  content.appendChild(homeDiv);
}

export { homePage };
