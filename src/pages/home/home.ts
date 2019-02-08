import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  casas = [];

  constructor(public navCtrl: NavController,
              public http: HttpClient) {

        this.http.get('/v1/api/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)')
        .subscribe(data => {
          //console.log(JSON.stringify(data));
          // if(data.hasOwnProperty('counter_map'))
          // {
          //   console.log(data.counter_map.all);
          // }
          if(data.hasOwnProperty('ads'))
          {
            this.casas = data.ads;
          }
        },
        error => {
          console.log(JSON.stringify(error));
        })
  }

}

//Las imagenes se encuantran en un arreglo llamado pictures, en el cual se tiene que acceder utilizando  "[0]" para poder acceder a la posición deseada.
// La dirección de la casa se encuentra en geo, primero se utiliza el name y despues displayName para especificar la zona.
// El precio se encuentr en un diccionario llamado price, el que se utiliza es formattedAmount para que aparezca la cantidad y el simbolo de dinero.