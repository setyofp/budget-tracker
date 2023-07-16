var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { attachRouter, urlForName } from './router';
import './static/icons/material';
import style from './static/themes/material-theme/colors.module.css' assert { type: 'css' };
import externalStyle from './app-index.styles.css' assert { type: 'css' };
export let AppIndex = class AppIndex extends LitElement {
    static styles = [style, externalStyle];
    main;
    firstUpdated() {
        const main = this.shadowRoot?.querySelector('main');
        console.log({ main });
        console.log(this.main);
        if (main)
            attachRouter(main);
    }
    render() {
        return html `
      <div class="surface">
        <!-- navigation bar -->
        <header class="surface-container">
          <nav class="top-bar">
            <h3>Budget Tracker</h3>
            <vaadin-icon icon="material:notifications" style="fill: blue"></vaadin-icon>
          </nav>
        </header>
        <!-- app content -->
        <main role="main" id="main"></main>
        <!-- bottom navigation bar -->
        <div class="bottom-navbar surface-container">
          <a href="${urlForName('home')}">Home</a>
          <a href="${urlForName('credit-page')}">Credit Page</a>
          <a href="${urlForName('debit-page')}">Debit Page</a>
        </div>
      </div>
    `;
    }
};
__decorate([
    query('#main')
], AppIndex.prototype, "main", void 0);
AppIndex = __decorate([
    customElement('app-index')
], AppIndex);
//# sourceMappingURL=app-index.component.js.map