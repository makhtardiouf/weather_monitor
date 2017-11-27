import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { CityComponent } from './weather/city.component';
import { WeatherComponent } from './weather/weather.component';
import { PageNotFoundComponent } from './not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { WeatherRoutingModule } from './weather/weather-routing.module';

import { WeatherService } from './weather/weather.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    WeatherRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    CityComponent,
    WeatherComponent,
    PageNotFoundComponent
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent, WeatherComponent, CityComponent]
})

export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
