import { Router } from '@vaadin/router';
import type { Params } from '@vaadin/router';

import { routes } from './routes';

const router = new Router();

router.setRoutes([
  // redirect URL without trailing slash
  // {
  //   path: '(.*)/',
  //   action: (context, commands) => {
  //     console.log({ context });
  //     console.log({ commands });
  //     const newPath = context.pathname.slice(0. -1);
  //     console.log({ newPath });
  //     return commands.redirect(newPath);
  //   }
  // },
  ...routes
]);

export const attachRouter = (outlet: HTMLElement) => {
  router.setOutlet(outlet);
};

export const urlForName = (name: string, params?: Params) => {
  return router.urlForName(name, params);
};