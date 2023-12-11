import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import * as L from 'leaflet';

interface Multas {
  id: number;
  cedula_infractor: number;
  placa_vehiculo: number;
  motivo_multa: string;
  foto_evidencia: string;
  comentario: string;
  nota_voz: string;
  latitud: number;
  longitud: number;
  fecha: Date;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  Multas: Multas[] = [];
  map: any;

  constructor(private router: Router, private ApiService: ApiService) {}

  ngOnInit() {
    this.getMultas();
  }

  getMultas() {
    this.ApiService.getMultas().subscribe((data: any) => {
      this.Multas = data as Multas[];
      this.loadMap();
      this.addMarkers();
    });
  }

  loadMap() {
    this.map = L.map('map').setView([19.4517, -70.69703], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  addMarkers() {
    this.Multas.forEach((multa) => {
      const marker = L.marker([multa.latitud, multa.longitud]).addTo(this.map);
      console.log(multa.latitud, multa.longitud);
      marker.bindPopup(
        `<b>Cédula Infractor:</b> ${multa.cedula_infractor}<br>
         <b>Placa Vehículo:</b> ${multa.placa_vehiculo}<br>
         <b>Comentario:</b> ${multa.comentario}`
      );
    });
  }
}
