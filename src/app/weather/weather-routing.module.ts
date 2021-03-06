import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather.component';
import { CityComponent } from './city.component';

const weatherRoutes: Routes = [
    // Weather location querying
    { path: '', redirectTo: 'weather', pathMatch: 'full'},

    { path: 'weather/:woeid', component: CityComponent },
    { path: '#/weather/:woeid', component: CityComponent },

    { path: 'weather', component: WeatherComponent },

];


@NgModule({
    imports: [
        RouterModule.forChild(weatherRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WeatherRoutingModule { }

