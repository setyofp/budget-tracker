import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@vaadin/icons';
import style from '../../static/themes/material-theme/colors.module.css' assert { type: 'css' };
export let FloatingActionButton = class FloatingActionButton extends LitElement {
    constructor() {
        super(...arguments);
        this.icon = '';
    }
    static { this.styles = [style]; }
    render() {
        return html `
      <div class="container primary-container">
        <vaadin-icon icon=${this.icon}></vaadin-icon>
      </div>
    `;
    }
};
__decorate([
    property({ type: String, reflect: true })
], FloatingActionButton.prototype, "icon", void 0);
FloatingActionButton = __decorate([
    customElement('floating-action-button')
], FloatingActionButton);
//# sourceMappingURL=floating-action-button.component.js.map