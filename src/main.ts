import { renderFooter } from './Footer';
import { renderHeader } from './Header';
import { renderList } from './Lista';

const main = () => {
  console.log('Loaded Main 😺');

  const domAppElement = document.querySelector<HTMLDivElement>('#app');

  renderHeader(domAppElement);
  renderList(domAppElement);
  renderFooter(domAppElement);
};

main();
