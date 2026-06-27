import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'

import { routes } from './app.routes';
import { authInterceptor } from './core/auth.interceptor';
import { AppInitService } from './core/app-init.service';
import { provideHighcharts, providePartialHighcharts } from 'highcharts-angular';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';

function initializeApp(appInitService: AppInitService) {
  return () => appInitService.init();        // ✅ Runs before first render
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(
      withInterceptors([authInterceptor, loadingInterceptor])
    ),
    provideHighcharts(),
    providePartialHighcharts({
      modules: () => [
        import('highcharts/modules/map') // 👈 CRITICAL: Loads the mapping engine
      ]
    })
  ]
};
