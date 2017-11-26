import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
    {
      path: '',
      component: AppComponent
    },
    {
      path: 'query/:woeid',
      component: WeatherComponent
    }
  ];
