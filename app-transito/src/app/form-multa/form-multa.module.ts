import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMultaPageRoutingModule } from './form-multa-routing.module';

import { FormMultaPage } from './form-multa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormMultaPageRoutingModule
  ],
  declarations: [FormMultaPage]
})
export class FormMultaPageModule {}
