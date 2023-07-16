import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import style from '../../static/themes/material-theme/colors.module.css' assert { type: 'css' };
import externalStyle from './top-app-bar.style.css' assert { type: 'css'};
import typography from '../../static/themes/material-theme/typography.module.css' assert { type: 'css' };
import '@vaadin/icons';
import '@vaadin/icon';

@customElement('top-app-bar')
export class TopAppBar extends LitElement {
  static styles = [style, externalStyle, typography];

  render() {
    return html`
      <vaadin-icon class="on-surface-text" icon="material:menu"></vaadin-icon>
      <p class="on-surface-text title-medium">Budget Tracker</p>
      <vaadin-icon class="on-surface-text" icon="material:account-circle"></vaadin-icon>
    `;
  }
}