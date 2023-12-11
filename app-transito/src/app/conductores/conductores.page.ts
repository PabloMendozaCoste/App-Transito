import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

interface Conductores {
  id: number;
  licencia: number;
  nombre: string; 
  apellido: string;
  fecha_nacimiento: Date;
  direccion: string;
  telefono: number;
}

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  Conductores: Conductores[] = []

  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit() {
    this.getConductores();
  }

  getConductores(){
    this.ApiService.getConductores().subscribe((data: any) => {
      this.Conductores = data as Conductores[];
    });
  }

}
