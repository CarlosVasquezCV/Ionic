import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisProyectosPageRoutingModule } from './mis-proyectos-routing.module';

import { MisProyectosPage } from './mis-proyectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisProyectosPageRoutingModule
  ],
  declarations: [MisProyectosPage]
})
export class MisProyectosPageModule {}
