import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@vaadin/icons';
import style from '../../static/themes/material-theme/colors.module.css' assert { type: 'css' };

@customElement('floating-action-button')
export class FloatingActionButton extends LitElement {
  static styles = [style];


  @property({ type: String, reflect: true })
  icon = '';

  render() {
    return html`
      <div class="container primary-container">
        <vaadin-icon icon=${this.icon}></vaadin-icon>
      </div>
    `;
  }
}
