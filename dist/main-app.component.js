var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle';
import '@vaadin/tabs';
import '@vaadin/icon';
import '@vaadin/icons';
import './static/icons/material';
import style from './static/themes/material-theme/colors.module.css' assert { type: 'css' };
import externalStyle from './main-app.styles.css' assert { type: 'css' };
export let MainApp = class MainApp extends LitElement {
    render() {
        return html `
      <!-- navigation bar -->
      <nav class="top-bar primary">
        <h3>Budget Tracker</h3>
        <vaadin-icon icon="material:notifications" style="fill: blue"></vaadin-icon>
      </nav>
      <!-- app content -->
      <div id=outlet></div>
    `;
    }
};
MainApp.styles = [style, externalStyle];
MainApp = __decorate([
    customElement('main-app')
], MainApp);
//# sourceMappingURL=main-app.component.js.map