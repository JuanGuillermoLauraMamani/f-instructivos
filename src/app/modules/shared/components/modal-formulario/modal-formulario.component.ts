import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DataSharedService } from 'src/app/services/data-shared.service';

@Component({
  selector: 'app-modal-formulario',
  templateUrl: './modal-formulario.component.html',
  styleUrls: ['./modal-formulario.component.scss'],
})
export class ModalFormularioComponent  implements OnInit {

  constructor(private modalController: ModalController, private navParams: NavParams, private serviceScript: DataSharedService) { }

  ngOnInit() {
    this.serviceScript.loadScript('my-script', 'src/app/utils/lib/custom-input.js')
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));
  }

  close(){
    this.modalController.dismiss();
  }
}
