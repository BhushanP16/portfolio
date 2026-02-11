// app.config.ts
// Angular application configuration
// हे Angular 17+ मध्ये required आहे

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// Angular Animations साठी
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),      // Routes नाहीत - single page आहे
    provideAnimations(),    // Animations enable
  ]
};