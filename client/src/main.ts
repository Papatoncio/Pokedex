import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

Mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxleHJnYjIiLCJhIjoiY2w5OHU2a2MwMGdkZTN0bnR1bWFncGtidyJ9.aipf1lD0PglqNtUsHHRpdw';

if (!navigator.geolocation) {
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
