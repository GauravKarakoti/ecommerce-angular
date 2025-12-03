import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product-details/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'checkout/payment/:id',
    renderMode: RenderMode.Server
  },
  {
    path: ':levelOne/:levelTwo/:levelThree',
    renderMode: RenderMode.Server
  },
  {
    path: 'order/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
