import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastradoPageRoutingModule } from './cadastrado-routing.module';

import { CadastradoPage } from './cadastrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastradoPageRoutingModule
  ],
  declarations: [CadastradoPage]
})
export class CadastradoPageModule {}
