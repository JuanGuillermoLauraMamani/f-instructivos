import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonModal } from '@ionic/angular/common';
import { Instructivo } from 'src/app/models/instructivos';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ModalPDFComponent } from '../modal-pdf/modal-pdf.component';
import { ModalInstructivoComponent } from '../modal-instructivo/modal-instructivo.component';

@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.scss'],
})
export class TablaAdminComponent  implements OnInit {

  public instructivos: Instructivo[] = [];
  instructivoSeleccionado: Instructivo = {} as Instructivo;
  isModalOpen = false;
  @Input() urlSeleccionado!:boolean;
  url!: ArrayBuffer;
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private dataService: DataServiceService, private modalController: ModalController) { }

  getData(): void {
    this.dataService.getData().subscribe((response: Instructivo[]) => {
      this.instructivos = response;
      console.log(response);
    });
  }

  ngOnInit() {
    this.getData();
  }
  async open(instructivo: Instructivo, url: string) {
    let modal = await this.modalController.create({
      component: ModalPDFComponent,
      cssClass: 'modal-pdf',
      componentProps: {
        instructivo, 
        url
      },
    });
    return modal.present();
  }


  async openCoso(instructivo: Instructivo) {
    let modal = await this.modalController.create({
      component: ModalInstructivoComponent,
      cssClass: 'modal-pdf',
      componentProps: {
        instructivo
      },
    });
    console.log(instructivo);
    return modal.present();
  }

  restarFechas(fechaInicial: string) : string {
    const tiempoInicial = Date.parse(fechaInicial);
    const tiempoFinal = new Date().getTime();

    let resultado!: string;
    let dias: number = Math.floor((tiempoFinal - tiempoInicial) / (1000 * 60 * 60 * 24));

    if(dias > 30){
      resultado = Math.trunc(dias/30)+" meses";
    }else if(dias > 365){
      resultado = Math.trunc(dias/365)+" años" ;
    }else{
      resultado = dias+" días";
    }
    return resultado
  }



}
