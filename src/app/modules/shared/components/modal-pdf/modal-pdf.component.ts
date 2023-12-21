import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Instructivo } from 'src/app/models/instructivos';
import { DataServiceService } from 'src/app/services/data-service.service';
import { SafeHtmlPipe } from 'src/app/utils/safe-html.pipe';
//import { SafeHtmlPipe } from 'src/app/utils/safe-html.pipe';

@Component({
  selector: 'app-modal-pdf',
  templateUrl: './modal-pdf.component.html',
  styleUrls: ['./modal-pdf.component.scss'],
})
export class ModalPDFComponent implements OnInit {
  //@Input() instructivo!: Instructivo;
  public instructivo!: Instructivo;
  url!:string ;
 

  constructor(private modalController: ModalController, private navParams: NavParams) {
    this.instructivo = this.navParams.get('instructivo');
    this.url = this.navParams.get('url');
    console.log(this.url);
  }
  
  ngOnInit() {
  }


  
  close(){
    this.modalController.dismiss();
  }
}
