import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';
import { BearerInterceptor } from './interceptors/bearer-interceptor';


export const appConfig: ApplicationConfig = {
  providers: [ 
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),  
    {
        provide: HTTP_INTERCEPTORS,
        useClass: BearerInterceptor,
        multi:true
    }
  ]
};
