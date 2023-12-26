import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { event } from 'jquery';
import { Instructivo } from 'src/app/models/instructivos';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DataSharedService } from 'src/app/services/data-shared.service';

@Component({
  selector: 'app-modal-formulario',
  templateUrl: './modal-formulario.component.html',
  styleUrls: ['./modal-formulario.component.scss'],
})
export class ModalFormularioComponent  implements OnInit {

  nombre!: string;
  version!: number;
  fecha_inicio!: Date;
  tipo: string = "";
  archivo!: File;
  fechaInicio!: string; 
  instructivo!: Instructivo;

  accion = "Agregar";

  constructor(private datosService: DataServiceService, private modalController: ModalController, private navParams: NavParams, private serviceScript: DataSharedService) { 
    this.instructivo = this.navParams.get('instructivo');  
    console.log(this.instructivo);
  }

  ngOnInit() {
    this.serviceScript.loadScript('my-script', 'src/app/utils/lib/custom-input.js')
            .then(data => {
                console.log('script loaded ', data);
            }).catch(error => console.log(error));
    this.esEditar();
  }
  esEditar(){
    if(this.instructivo !== undefined){
      this.accion = "Editar";
    }
  }

  enviarDatos(){
    const formData = new FormData();
    // Agrega los datos del formulario según sea necesario
    formData.append('nombre', this.nombre);
    formData.append('version', this.version.toString());
    formData.append('fecha_inicio', this.fecha_inicio.toString());
    formData.append('tipo', this.tipo);
    formData.append('file', this.archivo);

    // Llama al servicio para enviar los datos al backend
    this.datosService.registrarInstructivo(formData).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        // Maneja la respuesta del servidor según sea necesario
      }
    );

  }

  
   
  obtenerFechaSeleccionada(event: any) {
    this.fechaInicio = event.detail.value; // Esto obtiene la fecha seleccionada del evento
    console.log(this.fechaInicio); // Puedes usar esta fecha como desees
  }





  close(){
    this.modalController.dismiss();
  }
}
