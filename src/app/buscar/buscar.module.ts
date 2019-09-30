import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { BuscarPage } from './buscar.page';
import { ClinicListPage } from '../clinic-list/clinic-list.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BuscarPage,
    ClinicListPage
  ],
  providers: [
    Geolocation
  ],
  entryComponents: [
    ClinicListPage
  ]
})
export class BuscarPageModule {}
