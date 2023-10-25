import { Footer } from './Footer';
import { Header } from './Header';
import { List } from './Lista';
import { repo } from './repo';

const main = () => {
  console.log('Loaded Main 😺');

  // RenderHeader(domAppElement);
  // renderList(domAppElement);
  // renderFooter(domAppElement);

  const petList = repo();
  const components = [
    new Header('#app'),
    new List('#app', petList),
    new Footer('#app'),
  ];
};

main();
