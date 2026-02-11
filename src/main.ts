// main.ts
// Angular application start होण्याचा entry point
// हा file सगळ्यात आधी run होतो

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));