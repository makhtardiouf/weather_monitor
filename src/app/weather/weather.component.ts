import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { City, WeatherService } from './weather.service';

@Component({
  selector: 'app-root', // 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Makhtar\'s Weather Demo app';

  cities$: Observable<City[]>;
  city$: Observable<City>;


  private woeid: number;

  constructor(
    private service: WeatherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cities$ = this.service.getCities();
   
    this.city$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.woeid = +params.get('woeid');
        return this.service.getCity(565346);

      });
  }

  queryId(id: number) {
    console.log('Querying weather data...');
  }
}
