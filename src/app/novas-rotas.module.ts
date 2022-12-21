import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const rotas = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  {}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas, { useHash: true })
  ]
})
export class NovasRotasModule { }
