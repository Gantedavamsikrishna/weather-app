import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  weatherApiBaseUrl: string = 'https://openweather43.p.rapidapi.com/weather';
  XRapidheadername: string = 'X-RapidAPI-Host';
  XRapidhostheadervalue: string = 'openweather43.p.rapidapi.com';
  XRapidkeyheadername: string = 'X-RapidAPI-Key';
  XRapidkeyhostheadervalue: string =
    '8371971387msh50556cd49aee60cp1a6b8bjsn57d1fcccb05d';
  getWeatherData(cityName: string) {
    return this.http.get(this.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(this.XRapidheadername, this.XRapidhostheadervalue)
        .set(this.XRapidkeyheadername, this.XRapidkeyhostheadervalue),
      params: {
        q: cityName,
      },
    });
  }
}
