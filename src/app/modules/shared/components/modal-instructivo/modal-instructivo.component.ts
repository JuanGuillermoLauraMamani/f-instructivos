import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Instructivo } from 'src/app/models/instructivos';

@Component({
  selector: 'app-modal-instructivo',
  templateUrl: './modal-instructivo.component.html',
  styleUrls: ['./modal-instructivo.component.scss'],
})
export class ModalInstructivoComponent  implements OnInit {

  public instructivo!: Instructivo;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    this.instructivo = this.navParams.get('instructivo');
  }
  
  ngOnInit() {
  }
  
  close(){
    this.modalController.dismiss();
  }
}
