import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popover-custom',
  templateUrl: './popover-custom.component.html',
  styleUrls: ['./popover-custom.component.scss'],
})
export class PopoverCustomComponent  implements OnInit {

  @Input() tipo_popover!:string;
  @Input() data:string[]= [];
  @Output() datosRecibidos = new EventEmitter<string>();  
  valor!:string;


  constructor() { }

  ngOnInit() {}

 
  addItem(valor: string){
    this.valor = valor;
    this.datosRecibidos.emit(this.valor);
  }

  

}
