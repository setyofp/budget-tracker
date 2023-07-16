import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('credit-page')
export class CreditPage extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      background-color: green;
    }
  `;

  render() {
    return html`
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
}