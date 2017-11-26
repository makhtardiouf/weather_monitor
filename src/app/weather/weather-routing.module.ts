import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather.component';
import { CityComponent } from '../city.component';


const weatherRoutes: Routes = [
    // Weather location querying

    { path: 'wea/:woeid', redirectTo: '/weather/:woeid' },

    { path: 'weather/:woeid', component: CityComponent },

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

