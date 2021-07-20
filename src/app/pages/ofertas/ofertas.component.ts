import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { ReqResResponse } from '../../modelos/req-response'

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styles: [
  ]
})
export class OfertasComponent implements OnInit {

  public ofertas : any
  public characteristics : any
  public productOfferingPrices : any
  constructor( private ofertasServicio: OfertasService) { }

  ngOnInit(){
    this.ofertasServicio.cargarOfertas()
    .subscribe( (resp : ReqResResponse) => {
      console.log(resp);
      this.ofertas = resp;
    });
  }

  onUpdate(userstory: any): void {
    console.log(userstory.versions[0].characteristics);
    this.characteristics = userstory.versions[0].characteristics;
    this.productOfferingPrices = userstory.versions[0].productOfferingPrices
  }
}
