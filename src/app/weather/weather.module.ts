import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { WeatherComponent } from './weather.component';
import { CityComponent } from './city.component';
import { PageNotFoundComponent } from '../not-found.component';

import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule,
    HttpClientModule
  ],

  declarations:
  [
    CityComponent,
    WeatherComponent,
    PageNotFoundComponent
  ],
  providers: [WeatherService]
})
export class WeatherModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      console.log('Weather Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
