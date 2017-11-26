import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

export class City {
  constructor(
    public id: number,
    public name: string,
    public temperature: number,
    public min_temp: number,
    public max_temp: number,
    public icon: string) { }
}

// const CITIES = [
//   new City(1, 'Paris', 10, 50, 5, 'sun')
// ];

// Cities woeid to be retrieved with http://localhost:9200/weather.php?command=search&keyword=dublin

const targets = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];

@Injectable()
export class WeatherService {
  public cities: Array<City> = [];
  tmpCity: City;
  woeid: number;

  getCities() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    targets.forEach(el => {
      this.http.get('http://localhost:9200/weather.php?command=search&keyword=' + el,
        { headers: headers }).subscribe(data => {
          if (!data) {
            return;
          }

          this.woeid = data[0].woeid;
          console.log(data[0].title, ' => ', this.woeid);
          
          this.http.get('http://localhost:9200/weather.php?command=location&woeid=' + this.woeid,
            { headers: headers }).subscribe(cityData => {
              // Read the result field from the JSON response.
              const tmp = cityData['consolidated_weather'][0];
              this.tmpCity = new City(tmp.id, tmp.title, tmp.the_temp, tmp.min_temp, tmp.max_temp, tmp.weather_state_name);
              this.cities.push(this.tmpCity);
            });

        });
    });
    console.log(this.cities);
    return Observable.of(this.cities);
  }


  getCity(id: number | string) {
  }

  constructor(private http: HttpClient) { }

}
