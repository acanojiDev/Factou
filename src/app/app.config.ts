import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CORE_PROVIDERS } from './core/core.config';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import lara from '@primeuix/themes/lara';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    ...CORE_PROVIDERS,
    providePrimeNG({
        ripple: true,
        theme: {
          preset: lara,

        },
      license: environment.PRIMEUI_LICENSE_KEY
    })
  ],
};
