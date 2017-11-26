import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './weather/weather.component';
import {WeatherService} from './weather/weather.service';

import { PageNotFoundComponent } from './not-found.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent, WeatherComponent]
})

export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
 }
