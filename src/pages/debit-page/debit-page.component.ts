import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('debit-page')
export class DebitPage extends LitElement {
  render() {
    return html`
      <h1>Debit Page</h1>
    `;
  }
}