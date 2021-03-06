
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { City, WeatherService } from './weather.service';
import { slideInDownAnimation } from './animations';

@Component({
  //  selector: 'app-city',
    template: `
    <h3>City details</h3>
    <ul *ngIf="city$ | async as city">
        <li>{{ city.name }}</li>
        <!-- <li>{{ city.temperature.toPrecision(3) }}</li> -->

        <!-- <li>{{ city.min_temp.toPrecision(3) }}</li>
        <li>{{ city.max_temp.toPrecision(3) }}</li> -->
        <li>{{ city.icon }} </li>
    </ul>
    <p>
    <button (click)="gotoCities(city)">Back</button>
    </p>
    `,
    animations: [slideInDownAnimation]
})
export class CityComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    city$: Observable<City>;
    woeid: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: WeatherService
    ) { }

    ngOnInit() {
        try {
            console.log('\n\nInside city compo');

            this.city$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
              // (+) before `params.get()` turns the string into a number
              this.woeid = +params.get('woeid');
              if (this.woeid === 0 || !this.woeid ) {
                // default for testing
                this.woeid = 565346;
              }
              return this.service.getCity(this.woeid);
            });

        } catch (e) {
            console.log('Error in City component init', e.message);
        }
    }

    gotoCities(city: City) {
        const id = city ? city.id : null;
        this.router.navigate(['/weather', { woeid: id }]);
    }


}
