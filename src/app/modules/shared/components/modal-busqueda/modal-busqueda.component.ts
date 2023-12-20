import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-busqueda',
  templateUrl: './modal-busqueda.component.html',
  styleUrls: ['./modal-busqueda.component.scss'],
})
export class ModalBusquedaComponent  implements OnInit {

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {}

  close(){
    this.modalController.dismiss();
  }
}
