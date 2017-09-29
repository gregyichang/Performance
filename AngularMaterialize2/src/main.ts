//import { CommonModule } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { MaterializeModule } from 'ng2-materialize';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//if (environment.production) {
  enableProdMode();
//}

platformBrowserDynamic().bootstrapModule(AppModule);
