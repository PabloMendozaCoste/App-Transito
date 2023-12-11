import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMultaPage } from './form-multa.page';

const routes: Routes = [
  {
    path: '',
    component: FormMultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMultaPageRoutingModule {}
