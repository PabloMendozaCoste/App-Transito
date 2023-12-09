import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tarifas', url: './tarifas', icon: 'receipt' },
    { title: 'Consulta de vehículo', url: './vehiculos', icon: 'reader' },
    { title: 'Consulta de conductor', url: './conductores', icon: 'reader' },
    { title: 'Formulario Multa', url: './form-multa', icon: 'clipboard' },
    { title: 'Multas registradas', url: './multas', icon: 'reader' },
    { title: 'Mapa de multas', url: './mapa', icon: 'map' },
    { title: 'Noticias', url: './noticias', icon: 'newspaper' },
    { title: 'Estado del clima', url: './clima', icon: 'cloud' },
    { title: 'horóscopo ', url: './horoscopo', icon: 'star' },
  ];
  constructor() {}
}
