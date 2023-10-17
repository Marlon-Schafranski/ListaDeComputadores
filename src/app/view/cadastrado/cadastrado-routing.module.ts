import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastradoPage } from './cadastrado.page';

const routes: Routes = [
  {
    path: '',
    component: CadastradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastradoPageRoutingModule {}
