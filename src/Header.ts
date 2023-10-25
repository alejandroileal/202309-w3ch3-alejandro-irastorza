import { Component } from './Component';
export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header><h1>Pet List 😺</h1></header>`;
  }
}
