import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClassificacaoComponent } from './classificacao/classificacao.component';

const routes: Routes = [
  {
    path: 'classificacao',
    component: ClassificacaoComponent
  },

  {
    path: '',
    redirectTo: '/classificacao',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
