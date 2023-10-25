import { Component } from './Component';
export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<footer>
  <address>® Pet List All Rights Reserved <a href="google.com">Donate</a></address>
</footer>`;
  }
}
