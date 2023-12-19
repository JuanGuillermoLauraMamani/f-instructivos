import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructivoPage } from './instructivo.page';

const routes: Routes = [
  {
    path: '',
    component: InstructivoPage
  },
  {
        
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructivoPageRoutingModule {}
