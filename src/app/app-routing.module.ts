import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InicioComponent } from './componentes/inicio/inicio.component';


const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'intranet',
    loadChildren:'./intranet/intranet.module#IntranetModule'
  },
  {
    path:'**',
    component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
