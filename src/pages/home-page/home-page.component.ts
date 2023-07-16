import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from '../../static/themes/material-theme/colors.module.css' assert { type: 'css' };
import extendedStyle from './home-page.style.css' assert { type: 'css' };

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = [style, extendedStyle];

  render() {
    return html`
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
}