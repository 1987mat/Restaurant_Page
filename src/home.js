import { content } from './index';

function homePage() {
  window.scroll(0, 0);

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-div');
  homeDiv.classList.add('container');

  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero-div');

  const welcomeContainer = document.createElement('div');
  welcomeContainer.classList.add('welcome-container');
  const welcomeTitle = document.createElement('h3');
  welcomeTitle.innerHTML = 'Pizzeria Del Campo';
  welcomeTitle.classList.add('welcome-title');

  const subtitle = document.createElement('h5');
  subtitle.innerHTML = 'Artisan Pizza since 1960';
  subtitle.classList.add('subtitle');

  const orderNowBtn = document.createElement('button');
  orderNowBtn.innerHTML = 'MENU';
  orderNowBtn.classList.add('order-now-link');
  welcomeContainer.append(welcomeTitle, subtitle, orderNowBtn);

  const articleSection = document.createElement('div');
  articleSection.classList.add('article-section');

  const ourStory = document.createElement('h3');
  ourStory.innerText = 'OUR STORY';
  ourStory.classList.add('our-story-text');

  const ovenImage = document.createElement('img');
  ovenImage.src = 'images/oven.jpg';
  ovenImage.classList.add('article-home-image');

  // SM Icons
  const iconDiv = document.createElement('div');
  iconDiv.classList.add('icon-div');

  const fbIcon = document.createElement('i');
  fbIcon.classList.add('bi');
  fbIcon.classList.add('bi-facebook');

  const igIcon = document.createElement('i');
  igIcon.classList.add('bi');
  igIcon.classList.add('bi-instagram');

  const twitterIcon = document.createElement('i');
  twitterIcon.classList.add('bi');
  twitterIcon.classList.add('bi-twitter');

  const linkFB = document.createElement('a');
  linkFB.href = 'https://www.facebook.com';
  linkFB.target = '_blank';
  linkFB.appendChild(fbIcon);

  const linkIG = document.createElement('a');
  linkIG.href = 'https://www.instagram.com';
  linkIG.target = '_blank';
  linkIG.appendChild(igIcon);

  const linkTW = document.createElement('a');
  linkTW.href = 'https://www.twitter.com/';
  linkTW.target = '_blank';
  linkTW.appendChild(twitterIcon);

  iconDiv.append(linkFB, linkIG, linkTW);

  // Feed
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
    'Pizzeria Del Campo was founded in 1960 in NYC. Initially a small pizzeria, the business quickly grew and today is considered one of the top spot for authentic Italian pizza in the whole city. All of our ingredients are carefully selected and imported from overseas. The dough is fermented for hours and we only use a wood fired oven. We are planning to open more locations soon and for now we are happy to have you as our customer.';

  textDiv.appendChild(text);
  articleSection.append(
    ourStory,
    ovenImage,
    textDiv,
    followText,
    iconDiv,
    feedDiv
  );

  heroDiv.append(welcomeContainer);
  homeDiv.append(heroDiv, articleSection);
  content.appendChild(homeDiv);
}

export { homePage };
