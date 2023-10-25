export const renderHeader = (parentElement: HTMLElement) => {
  parentElement.innerHTML += `
  <header><h1>Pet List</h1></header>`;

  return parentElement;
};
