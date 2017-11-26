import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, ParamMap } from '@angular/router';

 import {City, WeatherService} from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Makhtar\'s Weather Demo app';
  srvUrl = 'http://localhost:9200/weather.php?';
  cities$: Observable<City[]>;
  results: string[];

  private woeid: number;

  constructor(
    private service: WeatherService,
    private route: ActivatedRoute,
  //  private http: HttpClient
  ) {}

  ngOnInit() {
    this.cities$ = this.service.getCities();
    
    // this.route.paramMap
    // .switchMap((params: ParamMap) => {
    //   // (+) before `params.get()` turns the string into a number
    //   this.woeid = +params.get('woeid');
    //   return this.service.getCities();
    // });
  }

  queryId(id: 44418) {
    console.log('Querying weather data...');
  }
}
