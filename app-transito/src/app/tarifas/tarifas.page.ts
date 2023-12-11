import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';

interface Tarifas {
  id: number;
  tipo: string;
  monto: number; 
}

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.page.html',
  styleUrls: ['./tarifas.page.scss'],
})

export class TarifasPage implements OnInit {

  Tarifas: Tarifas[] = [];
  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit() {
    this.getTarifas();
  }

  getTarifas(){
    this.ApiService.getTarifas().subscribe((data: any) =>{
      this.Tarifas = data as Tarifas[];
    })
  }

}
