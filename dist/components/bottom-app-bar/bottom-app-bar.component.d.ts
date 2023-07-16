import { LitElement } from 'lit';
import '@vaadin/icons';
import '@vaadin/icon';
import { AppIcon } from './bottom-app-bar.model';
import '../floating-action-button/floating-action-button.component';
export declare class BottomAppBar extends LitElement {
    static styles: any[];
    _icon: HTMLElement[];
    _iconContainer: HTMLElement[];
    isActive: boolean;
    icons: AppIcon[];
    _navClickHandler(e: Event): void;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=bottom-app-bar.component.d.ts.map