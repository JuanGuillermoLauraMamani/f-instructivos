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

@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    TablaVigentesComponent,
    ModalPDFComponent,
    ModalInstructivoComponent,
    TablaAdminComponent,
    InstructivoDetalleComponent,
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
    InstructivoDetalleComponent,
    ReactiveFormsModule,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    RouterModule,
  ],
  providers: [
    SafeHtmlPipe
  ]
})
export class SharedModule {}
