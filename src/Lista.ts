import { type Pet } from './model/pet';
import { repo } from './repo';

const listedPets = repo();

export const list = (pets: Pet) => {
  const template = `<li id="">${pets.name}</li>`;

  return template;
};

export const renderList = (parentElement: HTMLElement) => {
  let htmlElement = `<ul class"pet-list">`;
  htmlElement += listedPets.map((pet) => list(pet));
  htmlElement += `</ul>`;
  parentElement.innerHTML += htmlElement;

  return htmlElement;
};
