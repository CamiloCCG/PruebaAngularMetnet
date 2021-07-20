import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ReqResResponse } from '../modelos/req-response';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient){}

  cargarOfertas(){
    return this.http.get<ReqResResponse>('../assets/ofertas.json');
  }
}
