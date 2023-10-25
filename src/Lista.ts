/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Component } from './Component';
import { type Pet } from './model/pet';
import { repo } from './repo';

const listedPets = repo();

export const list = (pets: Pet) => {
  const template = `<ul>
  <li id=""><p>Id: ${pets.id}</p></li>
  <li id=""><p>Nombre: ${pets.name}</p></li>
  <li id=""><p>Dueño: ${pets.owner}</p></li>
   <li id=""><p>Procedencia: ${
     pets.isAdopted ? 'Adoptado' : 'No adoptado'
   }</p></li>
  </ul>`;

  return template;
};

export const renderList = (parentElement: HTMLElement) => {
  let htmlElement = `<ul class"pet-list">`;

  htmlElement += listedPets.map((pet) => list(pet));
  htmlElement += `</ul>`;
  parentElement.innerHTML += htmlElement;

  return htmlElement;
};

export class List extends Component {
  data: Pet[];
  constructor(selector: string, data: Pet[]) {
    super(selector);
    this.data = data;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    let list = `<ul class"pet-list">`;
    list += this.data.map(
      (pet) => `<li><p>Id: ${pet.id}</p></li>
                <li><p>Nombre: ${pet.name}</p></li>
                <li><p>Dueño: ${pet.owner}</p></li>
                <li><p>Procedencia: ${
                  pet.isAdopted ? 'Adoptado' : 'No adoptado'
                }</p></li>`
    );
    list += `</ul>`;
    return list;
  }
}
