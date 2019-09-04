import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GeolocalisationPage } from './geolocalisation.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const routes: Routes = [
  {
    path: '',
    component: GeolocalisationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeolocalisationPage],
  providers: [Geolocation]
})
export class GeolocalisationPageModule {}
