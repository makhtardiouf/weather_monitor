import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  // Home: default page and we should see this when we first load the app
  { path: '#', component: AppComponent },

  // Weather location querying
  { path: 'weather/:woeid', component: WeatherComponent },

  // Location search, e.g. /#/search/dublin
  {path: 'search/:keyword', redirectTo: '/#'},
  { path: '', redirectTo: '/#', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
