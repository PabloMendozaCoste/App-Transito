import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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
  selector: 'app-multas',
  templateUrl: './multas.page.html',
  styleUrls: ['./multas.page.scss'],
})

export class MultasPage implements OnInit {

  Multas: Multas[] = []

  constructor(private router: Router, private ApiService: ApiService) {}

  ngOnInit() {
    this.getMultas();
  }

  getMultas(){
    this.ApiService.getMultas().subscribe((data: any) => {
      this.Multas = data as Multas[];
    });
  }

}
