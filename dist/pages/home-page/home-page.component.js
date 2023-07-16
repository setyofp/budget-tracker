import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from '../../static/themes/material-theme/colors.module.css' assert { type: 'css' };
import extendedStyle from './home-page.style.css' assert { type: 'css' };
export let HomePage = class HomePage extends LitElement {
    static { this.styles = [style, extendedStyle]; }
    render() {
        return html `
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
      <p>Home Page</p>
    `;
    }
};
HomePage = __decorate([
    customElement('home-page')
], HomePage);
//# sourceMappingURL=home-page.component.js.map