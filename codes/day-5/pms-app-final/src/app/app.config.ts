import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideProductService } from './configs/app-service-providers';
import { HttpFeature, HttpFeatureKind, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './modules/shared/services/token-interceptor.service';

/**
 * Configures Angular's HttpClient service to be available for injection.
The HttpClient service is provided in the root by default.
By default, HttpClient will be configured for injection with its default options for XSRF protection of outgoing requests. Additional configuration options can be provided by passing feature functions to provideHttpClient. For example, HTTP interceptors can be added using the withInterceptors(...) feature.
 */
const interceptors: HttpFeature<HttpFeatureKind.Interceptors> = withInterceptors([TokenInterceptor])

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideProductService(),
    provideHttpClient(interceptors)
  ]
};
