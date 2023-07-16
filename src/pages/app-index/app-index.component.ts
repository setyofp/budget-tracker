import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { attachRouter } from '../../router';

import '../../static/icons/material';
import style from '../../static/themes/material-theme/colors.module.css' assert { type: 'css' };
import externalStyle from './app-index.styles.css' assert { type: 'css' };

import '../../components/top-app-bar/top-app-bar.component';
import '../../components/bottom-app-bar/bottom-app-bar.component';

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = [style, externalStyle];

  @query('main')
  _main!: HTMLElement;

  firstUpdated() {
    attachRouter(this._main);
  }


  render() {
    return html`
      <div class="container">
        <!-- navigation bar -->
        <header class="top-navbar surface-container">
          <top-app-bar></top-app-bar>
        </header>
        <!-- app content -->
        <main role="main" class="surface"></main>
        <!-- bottom navigation bar -->
        <bottom-app-bar></bottom-app-bar>
      </div>
    `;
  }
}