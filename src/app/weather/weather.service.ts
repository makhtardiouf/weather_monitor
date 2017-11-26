import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// Object for storing cities information
export class City {
  constructor(
    public id: number = 0,
    public woeid: number = 44418,
    public name: string = 'Undefined',
    public temperature: number = 0,
    public min_temp: number = 0,
    public max_temp: number = 0,
    public icon: string = 'Undefined',
    public img: string = '',
    public day: string = '',
    public date: Date = new Date()
  ) { }
}

// Cities woeid will be retrieved with http://localhost:9200/weather.php?command=search&keyword=dublin

const defaultCities = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
const srvUrl = 'http://localhost:9200/weather.php?';

@Injectable()
export class WeatherService {
  tmpCity: City;
  woeid: number;
  public cities: Array<City> = [];
  headers = new HttpHeaders();
  ids: Array<number> = [];
  days: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Retrieve default cities information
  getCities() {

    defaultCities.forEach(el => {

      this.http.get(srvUrl + 'command=search&keyword=' + el,
        { headers: this.headers }).subscribe(data => {
          if (!data) {
            console.log('No data retrieved for keyword', el);
            return;
          }

          this.woeid = data[0].woeid;
          console.log(data[0].title, ' => ', this.woeid);

          this.http.get(srvUrl + 'command=location&woeid=' + this.woeid,
            { headers: this.headers }).subscribe(cityData => {


              // Read the result field from the JSON response.
              const tmp = cityData['consolidated_weather'][0];
              const d = new Date(tmp.applicable_date);

              this.tmpCity = new City(tmp.id, this.woeid,
                data[0].title, tmp.the_temp,
                tmp.min_temp, tmp.max_temp,
                tmp.weather_state_name,
                tmp.weather_state_abbr,
                this.days[d.getDay()],
                tmp.applicable_date
              );
              this.cities.push(this.tmpCity);
            });
        });
    });

    //return this.cities;
    return Observable.of(this.cities);
  }



  // Retrieve a single city information by woeid
  getCity(id: number): Observable<City> {

    this.http.get(srvUrl + 'command=location&woeid=' + id,
      { headers: this.headers }).subscribe(data => {
        if (!data) {
          console.log('No data retrieved for woeid', id);
          return Observable.of(new City());
        }
        try {
          // Read the result field from the JSON response.
          const tmp = data['consolidated_weather'][0];
          if (!tmp) {
            console.log('No data retrieved for woeid', id, data['consolidated_weather']);
            return Observable.of(new City());
          }

          this.tmpCity = new City(tmp.id,
            id,
            data[0].title,
            tmp.the_temp,
            tmp.min_temp, tmp.max_temp,
            tmp.weather_state_name);

          this.cities.push(this.tmpCity);
          // Observable.of(this.cities);
          return Observable.of(this.tmpCity);

        } catch (e) {
          return Observable.of(new City());
        }
      });

    console.log('Early return for woeid', id);
    return Observable.of(new City());
  }

  constructor(private http: HttpClient) {

    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Origin', '*');

  }

}
