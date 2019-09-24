import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PainelPrincipalPage } from './painel-principal.page';

const routes: Routes = [
  {
    path: '',
    component: PainelPrincipalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PainelPrincipalPage]
})
export class PainelPrincipalPageModule {}
