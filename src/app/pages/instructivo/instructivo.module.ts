import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructivoPageRoutingModule } from './instructivo-routing.module';

import { InstructivoPage } from './instructivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructivoPageRoutingModule
  ],
  declarations: [InstructivoPage]
})
export class InstructivoPageModule {}
