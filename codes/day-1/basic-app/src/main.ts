import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

//Bootstraps an instance of an Angular application and renders a standalone component as the application's root component.
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
