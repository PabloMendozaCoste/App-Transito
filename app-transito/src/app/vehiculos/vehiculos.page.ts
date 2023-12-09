import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

interface Vehiculos {
  id: number;
  placa: string;
  marca: string; 
  modelo: string;
  color: string;
  año: string;
}

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})

export class VehiculosPage implements OnInit {

  Vehiculos: Vehiculos[] = [];

  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(){
    this.ApiService.getVehiculos().subscribe((data:any)=>{
      this.Vehiculos = data as Vehiculos[];
    })
  }

}
