import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-busqueda',
  templateUrl: './modal-busqueda.component.html',
  styleUrls: ['./modal-busqueda.component.scss'],
})
export class ModalBusquedaComponent  implements OnInit {

  @Input() data:string[]= [];
  @Output() item = new EventEmitter<string>();  
  valor:string = "";
  constructor() { }

  
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.data = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
  ngOnInit() {}

  onClick(item: string) {
    this.valor = item;
  }

  addItem(){
    this.item.emit(this.valor);
  }

}
