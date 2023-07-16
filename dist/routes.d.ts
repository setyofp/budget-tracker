import { Route } from "@vaadin/router";
import './pages/main-app.component';
import './pages/credit-page/credit-page';
import './pages/debit-page/debit-page';
import './pages/home-page/home-page';
export type PageRoute = Route & {
    title?: string;
    icon?: string;
    children?: PageRoute[];
};
export declare const pages: PageRoute[];
export declare const routes: PageRoute[];
//# sourceMappingURL=routes.d.ts.map