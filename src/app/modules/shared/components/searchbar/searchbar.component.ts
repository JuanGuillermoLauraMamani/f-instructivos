import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Instructivo } from 'src/app/models/instructivos';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent  implements OnInit {

  @Input() instructivosData: Instructivo[]= [];
  data: any[] = [];
  @Output() datosRecibidos = new EventEmitter<string>();  
  valor!:string;
  

  constructor() { }

  ngOnInit() {

  }

  obtenerDatosFiltro(name:keyof Instructivo) {

    const campoEsspecial = name;
    this.data = this.obtenerValoresCampo(campoEsspecial)

  }

  obtenerValoresCampo(campo: keyof Instructivo): any[] {
    const valoresSet = new Set<any>();
    this.instructivosData.forEach(instructivo => {
      const valor = instructivo[campo];
      valoresSet.add(valor);
    });
  
    return Array.from(valoresSet);
    //return this.instructivosData.map(instructivo => instructivo[campo]);
  }

  recibir(datos:string){
    console.log("recibir: "+datos );
    this.valor = datos;
    this.datosRecibidos.emit(this.valor);
  }
}
