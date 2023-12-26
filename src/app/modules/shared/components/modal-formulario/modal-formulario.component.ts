import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class ModalFormularioComponent implements OnInit {
  nombre!: string;
  version!: number;
  fecha_inicio!: string;
  tipo: string = '';
  archivo!: File;
  confidencia: string = '';



  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required]),
    fecha_inicio: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    archivo: new FormControl('', [Validators.required]),
  });

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
    console.log(this.nombre);
    formData.append('version', this.version + '');
    console.log(this.version);
    formData.append('fecha_inicio', this.fecha_inicio);
    console.log(this.fecha_inicio);
    formData.append('id_tipo', this.tipo);
    console.log(this.tipo);
    formData.append('file', this.archivo);
    console.log(this.archivo);
    formData.append('confidencia', this.confidencia);
    
    console.log(formData);

    // Llama al servicio para enviar los datos al backend
    await this.datosService.registrarInstructivo(formData).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        // Maneja la respuesta del servidor según sea necesario
      },
      error: (error) => {
        console.error('Error al enviar los datos:', error);
        // Maneja el error según sea necesario
      },
    });
  }

  onFileUpload(event: any) {
    this.archivo = event.target.files[0];
    console.log(this.archivo);
  }

  obtenerTipoDocumento(event: any) {
    console.log(event);
    this.tipo = event.detail.value;
    console.log(this.tipo);
  }

  obtenerConfidencia(event: any) {
    console.log(event);
    this.confidencia = event.detail.value;
    console.log(this.confidencia);
  }

  obtenerFechaSeleccionada(event: any) {
    this.fecha_inicio = event.detail.value; // Esto obtiene la fecha seleccionada del evento
    console.log(this.fecha_inicio); // Puedes usar esta fecha como desees
  }

  close() {
    this.modalController.dismiss();
  }
}
