import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');  // Corrected spelling
    this.headers.append('Content-Type', 'application/json');  // Corrected spelling
    this.headers.append('Access-Control-Allow-Origin', '*');
  }


  addMultas(data: any) { 
    return this.http.post('http://localhost/create_multas.php', data);
  }

  getTarifas(){
    return this.http.get('http://localhost/getTarifas.php');
  }

  getConductores(){
    return this.http.get('http://localhost/getConductores.php');
  }

  getVehiculos(){
    return this.http.get('http://localhost/getVehiculos.php');
  }

  getMultas(){
    return this.http.get('http://localhost/getMultas.php');
  }

}
