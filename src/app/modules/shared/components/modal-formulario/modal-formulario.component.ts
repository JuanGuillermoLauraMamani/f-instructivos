import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { event } from 'jquery';
import { Instructivo } from 'src/app/models/instructivos';
import { Tipo } from 'src/app/models/tipos';
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
  fecha_inicio!: any;
  tipo: string = '';
  archivo!: File;
  confidencia: string = '';
  tipos: Tipo[] = [];

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required]),
    fecha_inicio: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    archivo: new FormControl('', [Validators.required]),
  });

  fechaInicio!: string;
  instructivo!: Instructivo;

  accion:string = 'Agregar';

  constructor(
    private datosService: DataServiceService,
    private modalController: ModalController,
    private navParams: NavParams,
    private serviceScript: DataSharedService
  ) {
    this.instructivo = this.navParams.get('instructivo');

    
  }

  ngOnInit() {
    this.getTipos();
    this.esEditar();
  }
  esEditar() {
    if (this.instructivo !== undefined) {
      this.accion = 'Editar';
      this.nombre = this.instructivo.nombre;
      this.version = this.instructivo.version;
      this.fecha_inicio = this.instructivo.fecha_inicio
      console.log(this.fecha_inicio);
      this.tipo = this.instructivo.tipo;
      console.log(this.tipo);
      this.confidencia = this.instructivo.confidencia;
      console.log(this.confidencia);
    }
  }

  async enviarDatos() {
    const formData = new FormData();
    // Agrega los datos del formulario según sea necesario
    formData.append('nombre', this.nombre);

    formData.append('version', this.version + '');

    formData.append('fecha_inicio', this.fecha_inicio);

    formData.append('id_tipo', this.tipo);

    formData.append('file', this.archivo);

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

  async editarDatos() {
    const formData = new FormData();
    // Agrega los datos del formulario según sea necesario
    formData.append('nombre', this.nombre);

    formData.append('version', this.version + '');

    formData.append('fecha_inicio', this.fecha_inicio);

    formData.append('id_tipo', this.tipo);

    formData.append('file', this.archivo);

    formData.append('confidencia', this.confidencia);

    console.log(formData);

    // Llama al servicio para enviar los datos al backend
    await this.datosService
      .editarInstructivo(formData, this.instructivo.id_instructivo)
      .subscribe({
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
  }

  obtenerTipoDocumento(event: any) {
    this.tipo = event.detail.value;
  }

  obtenerConfidencia(event: any) {
    this.confidencia = event.detail.value;
  }

  obtenerFechaSeleccionada(event: any) {
    this.fecha_inicio = event.detail.value; 
  }


  getTipos(): void {
    this.datosService.getTipos().subscribe((response: Tipo[]) => {
      this.tipos = response;
      console.log(response);
    });
  }


  close() {
    this.modalController.dismiss();
  }
}
