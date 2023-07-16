import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
export let CreditPage = class CreditPage extends LitElement {
    static { this.styles = css `
    :host {
      height: 100%;
      background-color: green;
    }
  `; }
    render() {
        return html `
      <h1 class="font-bold underline">Credit Page</h1>
      <h1>Credit Page</h1>
      <h1>Credit Page</h1>
      <h1>Credit Page</h1>
      <h1>Credit Page</h1>
      <h1>Credit Page</h1>
      <h1>Credit Page</h1>
      <h1>Credit Page</h1>
      <h1>Credit Page</h1>
    `;
    }
};
CreditPage = __decorate([
    customElement('credit-page')
], CreditPage);
//# sourceMappingURL=credit-page.component.js.map