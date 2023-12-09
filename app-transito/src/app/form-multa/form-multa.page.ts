import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form-multa',
  templateUrl: './form-multa.page.html',
  styleUrls: ['./form-multa.page.scss'],
})

export class FormMultaPage {

  cedula_infractor: number=0;
  placa_vehiculo: number=0; 
  motivo_multa: string="";
  foto_evidencia: string="";
  comentario: string="";
  nota_voz: string="";
  latitud: number=0;
  longitud: number=0;
  fecha: Date = new Date();
  hora: Date = new Date();

  constructor(public _apiService: ApiService) { }

  addMultas(){
   
    let data = {
      cedula_infractor: this.cedula_infractor,
      placa_vehiculo: this.placa_vehiculo,
      motivo_multa: this.motivo_multa,
      foto_evidencia: this.foto_evidencia,
      comentario: this.comentario,
      nota_voz: this.nota_voz,
      latitud: this.latitud,
      longitud: this.longitud,
      fecha: this.fecha,
      hora: this.hora
    };

    this._apiService.addMultas(data).subscribe((res:any) => {
      console.log("SUCCESS:",res);
    },(error:any) => {
      console.log("Error:",error);
    })

  }

}
