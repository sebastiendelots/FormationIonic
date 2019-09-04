import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeProduitPage } from './liste-produit.page';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path: '',
    component: ListeProduitPage
  },
  {
    path: '/produit/{id}',
    component: ProduitComponent
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
    ListeProduitPage,
    ProduitComponent
  ]
})
export class ListeProduitPageModule {}
