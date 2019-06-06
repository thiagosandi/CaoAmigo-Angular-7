import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesComponent } from './times/times.component';
import { ArtilhariaComponent } from './artilharia/artilharia.component';
import { ClassificacaoComponent } from './classificacao/classificacao.component';

const routes: Routes = [
  {
    path: 'classificacao',
    component: ClassificacaoComponent
  },
  {
    path: 'times',
    component: TimesComponent
  },
  {
    path: 'artilharia',
    component: ArtilhariaComponent
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
