import { Route } from "@vaadin/router";

export const routes: Route[] = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home-page/home-page.component');
    }
  },
  {
    path: '/credit-page',
    name: 'credit-page',
    component: 'credit-page',
    action: async () => {
      await import('../pages/credit-page/credit-page.component');
    }
  },
  {
    path: '/debit-page',
    name: 'debit-page',
    component: 'debit-page',
    action: async () => {
      await import('../pages/debit-page/debit-page.component');
    }
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: 'not-found-page',
    action:async () => {
      await import('../pages/not-found/not-found.component');
    }
  }
];