/*
Highly recommend you view this course:
https://app.pluralsight.com/library/courses/angular-material/table-of-contents 

It helps to elaborate on this talk.
*/



import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
