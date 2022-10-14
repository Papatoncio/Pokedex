import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeappComponent } from './components/pokeapp/pokeapp.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GeoComponent } from './components/geo/geo.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path:'pokeapp',
    component: PokeappComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  },
  {
    path:'maps',
    component: GeoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
