import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaVigentesComponent } from './components/tabla-vigentes/tabla-vigentes.component';
import { ModalPDFComponent } from './components/modal-pdf/modal-pdf.component';
import { InstructivoDetalleComponent } from './components/instructivo-detalle/instructivo-detalle.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SafeHtmlPipe } from 'src/app/utils/safe-html.pipe';
import { TablaAdminComponent } from './components/tabla-admin/tabla-admin.component';
import { RouterModule } from '@angular/router';
import { ModalInstructivoComponent } from './components/modal-instructivo/modal-instructivo.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { PopoverCustomComponent } from './components/popover-custom/popover-custom.component';
import { ModalFormularioComponent } from './components/modal-formulario/modal-formulario.component';
import { ModalBusquedaComponent } from './components/modal-busqueda/modal-busqueda.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    TablaVigentesComponent,
    ModalPDFComponent,
    ModalInstructivoComponent,
    ModalFormularioComponent,
    ModalBusquedaComponent,
    TablaAdminComponent,
    InstructivoDetalleComponent,
    SearchbarComponent,
    PopoverCustomComponent,
    SafeHtmlPipe
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    TablaVigentesComponent,
    TablaAdminComponent,
    ModalPDFComponent,
    ModalInstructivoComponent,
    ModalBusquedaComponent,
    ModalFormularioComponent,
    InstructivoDetalleComponent,
    ReactiveFormsModule,
    SearchbarComponent,
    PopoverCustomComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    RouterModule,
    DataTablesModule
  ],
  providers: [
    SafeHtmlPipe
  ]
})
export class SharedModule {}
