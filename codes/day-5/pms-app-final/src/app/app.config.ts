import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideProductService } from './configs/app-service-providers';
import { HttpFeature, HttpFeatureKind, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './modules/shared/services/token-interceptor.service';

const interceptors: HttpFeature<HttpFeatureKind.Interceptors> = withInterceptors([TokenInterceptor])

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideProductService(),
    provideHttpClient(interceptors)
  ]
};
