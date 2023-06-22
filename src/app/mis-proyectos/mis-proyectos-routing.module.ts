import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisProyectosPage } from './mis-proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: MisProyectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisProyectosPageRoutingModule {}
