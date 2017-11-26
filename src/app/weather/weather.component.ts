 import { Component, OnInit } from '@angular/core';
 import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Makhtar\'s Weather Demo app';
  srvUrl = 'http://localhost:9200/weather.php?';

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

}
