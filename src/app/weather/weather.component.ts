import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { City, WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Makhtar\'s Weather Demo app';
  cities$: Observable<City[]>;
  city$: Observable<City>;
  statusMsg$: Observable<string>;

  private woeid: number;

  constructor(private service: WeatherService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.cities$ = this.service.getCities();
    this.statusMsg$ = this.service.statusMsg;

    // this.city$ = this.route.paramMap
    //   .switchMap((params: ParamMap) => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.woeid = +params.get('woeid');
    //     if (this.woeid === 0 || !this.woeid ) {
    //       // default for testing
    //       this.woeid = 565346;
    //     }
    //     return this.service.getCity(this.woeid);
    //   });
  }
}
