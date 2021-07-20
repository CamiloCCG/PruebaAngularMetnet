import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba-Angular';
  constructor(public json: JsonService){
    this.json.getJson('../assets/ofertas.json').subscribe((res:any)=>{
    });
  }
}
