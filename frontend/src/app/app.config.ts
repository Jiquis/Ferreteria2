import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = [
  provideRouter(routes),
];

export const environment = {
  endpoint: 'http://localhost:3000/'
}