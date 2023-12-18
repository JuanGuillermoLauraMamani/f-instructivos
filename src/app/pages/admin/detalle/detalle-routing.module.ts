import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePage } from './detalle.page';
import { InstructivoDetalleComponent } from 'src/app/modules/shared/components/instructivo-detalle/instructivo-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: DetallePage
  },{
    path: 'id',
    component: InstructivoDetalleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePageRoutingModule {}
