import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage {
  apiKey = 'f7d5bb22ff7583ebcde7aba2e1adc383'; // Reemplaza con tu clave de API
  latitud: number=0;
  longitud: number=0;
  climaData: any;

  constructor(private http: HttpClient) {}

  consultarClima() {
    if (this.latitud && this.longitud) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${this.apiKey}&units=metric`;

      this.http.get(apiUrl).subscribe((data) => {
        this.climaData = data;
        console.log(this.climaData);
      });
    }
  }
}
