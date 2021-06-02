import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';
@Component({
  selector: 'nx-poc-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  key = 'd4c12e9404aeb9063935ffe1f96de24c';
  header = {
    headers: new HttpHeaders({
      'x-rapidapi-key': '339af10a04mshd24f491d2ac5a1dp17d045jsnae615ffb41dd',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    }),
  };
  weather$: Observable<Weather>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.weather$ = this.http.get<Weather>(
      `http://api.openweathermap.org/data/2.5/weather?q=zagreb&appid=${this.key}`
    );
  }
}
