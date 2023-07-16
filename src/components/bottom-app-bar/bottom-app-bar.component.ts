import { LitElement, html } from 'lit';
import { customElement, queryAll, state } from 'lit/decorators.js';

import style from '../../static/themes/material-theme/colors.module.css' assert { type: 'css' };
import extendedStyle from './bottom-app-bar.css' assert { type: 'css' };
import typography from '../../static/themes/material-theme/typography.module.css' assert { type: 'css' };
import '@vaadin/icons';
import '@vaadin/icon';
import { AppIcon, Icons } from './bottom-app-bar.model';
import '../floating-action-button/floating-action-button.component';

@customElement('bottom-app-bar')
export class BottomAppBar extends LitElement {
  static styles = [style, extendedStyle, typography];

  @queryAll('vaadin-icon')
  _icon!: HTMLElement[];

  @queryAll('.icon-container')
  _iconContainer!: HTMLElement[];

  @state()
  isActive = false;

  @state()
  icons: AppIcon[] = Icons; 

  _navClickHandler(e: Event) {
    const target = (e.target as HTMLElement).closest('.icon-container');
    if (!target) return;
    for (const icon of this.icons) {
      icon.isActive = false;
    }
    const selectedIcon = this.icons.find(({ title }) => title === target.id);
    selectedIcon!.isActive = true;
    console.log(this.icons);
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        p {
          margin: 0;
        }

        .container {
          width: 100%;
          display: flex;
          justify-content: center;
          column-gap: 32px;
          padding: 12px 0 16px 0;
        }

        .icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 64px;
        }

        .icon-wrapper {
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          justify-content: center;
          height: 32px;
          width: 64px;
          border-radius: 16px;
        }
      </style>
      <div class="container surface-container" @click=${this._navClickHandler}>
      ${this.icons.map((it) => {
        return html`
          <div class="icon-container ${it.isActive ? 'active' : ''}" id=${it.title}>
            <div class="icon-wrapper ${it.isActive ? 'secondary-container' : ''}">
              <vaadin-icon class="${it.isActive ? 'on-secondary-container-text' : 'on-surface-variant-text'}" icon=${it.isActive ? it.icon.fill : it.icon.outline}></vaadin-icon>
            </div>
            <p class="label-medium ${it.isActive ? 'on-surface-text': 'on-surface-variant-text'}">${it.title}</p>
          </div>
        `;
      })}
      </div>
    `;
  }
}
